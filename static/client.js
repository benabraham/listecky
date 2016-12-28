var socket = io();
var isDetailView = window.location.pathname.match('^\/desk\/(\\d+)\/chair\/(\\d+)\/$');

if (isDetailView){
    var thisDeskId = parseInt(isDetailView.slice(1));
    var thisChairId = parseInt(isDetailView.slice(2));

    var statusButtons = $('.l-buttons--student .l-button');

    statusButtons.click(function(){
        statusButtons.removeClass('l-selected');
        $(this)
            .addClass('l-clicked')
            .closest('.l-buttons')
            .addClass('l-clicked');

        console.info('statusChange', thisDeskId, thisChairId, $(this).data('status-id'));

        socket.emit('statusChange', thisDeskId, thisChairId, $(this).data('status-id'));
    });

    socket
        .on('connect', function(){ // user authentication
            socket.emit('auth-request', thisDeskId, thisChairId);
        })

        .on('checkStatusAlert', function(){ // Ask student for status
            if (confirm('\n\n\n\nHotovo? \n\n\nOK pokud ano,\n\nCancel pokud ne.\n\n\n\n\n') == true){
                socket.emit('statusChange', thisDeskId, thisChairId, 'done');
            } else {
                return false
            }
        })
    ;

    var nameForm = $('.l-name_form');
    var nameButton = $('.l-set_name');
    var namePlaceholder = $('.l-student_name');
    var nameInput = $('[name=studentName]');

    // show form if no name is set
    if (namePlaceholder.text() == ''){
        nameForm.show();
        nameButton.hide();
        nameInput.focus();
    } else {
        nameForm.hide();
        nameButton.show();
    }

    // show form
    nameButton
        .on('click', function(){
            namePlaceholder.hide();
            nameForm.toggle();
            nameButton.hide();
            nameInput.focus();
            return false;
        })
    ;

    // send data from form
    nameForm
        .submit(function(event){
            socket.emit('setStudentName', thisDeskId, thisChairId, nameInput.val());
            event.preventDefault();
        })
    ;

} else { // room overview
    $('.l-buttons--teacher .l-button')
        .click(function(){
            socket.emit($(this).data('emit'));
        })
    ;

    function setDeskChairStatuses(room){
        if (room){
            $('[data-desk-id]')
                .each(function(){
                    var desk = room.desks[$(this).data('desk-id')];

                    // set desk status
                    $(this)
                        .find('.l-desk-shape > div')
                        .prop('class', 'l-status--' + desk.status)
                        .end()
                        .find('[data-chair-id]')
                        .each(function(){
                            var chair = desk.chairs[$(this).data('chair-id')];
                            $(this)
                                .prop('class', 'l-status--' + chair.status) // set chair status
                                .text(chair.name) // set student name
                            ;
                        })
                    ;
                })
        }
    }

    setDeskChairStatuses(room);

}

socket
    .on('connect', function(){ // user authentication
        socket.on('auth-success', function(room){
            console.info('+++ auth-success');
            if (!isDetailView) setDeskChairStatuses(room);
        });
    })

    .on('disconnected', function(room){ // user disconnected: room overview
        console.info('--- disconnected');

        if (!isDetailView) setDeskChairStatuses(room);
    })

    .on('statusChanged', function(deskId, chairId, statusType, room){ // status changed
        console.info('>>> statusChanged', 'desk', deskId, 'chair', chairId, statusType);

        if (thisDeskId == deskId && thisChairId == chairId){
            statusButtons.each(function(){
                $(this).removeClass('l-clicked l-selected');
                if ($(this).data('status-id') == statusType){
                    $(this)
                        .addClass('l-selected')
                        .closest('.l-buttons')
                        .removeClass('l-clicked');
                }
            });

        }

        if (!isDetailView) setDeskChairStatuses(room);

    })

    .on('deskStatusChanged', function(room){ // status changed
        console.info('███ deskStatusChanged');
        if (!isDetailView) setDeskChairStatuses(room);
    })

    .on('studentNameSet', function(deskId, chairId, studentName, room){ // name set
        if (thisDeskId == deskId && thisChairId == chairId){
            namePlaceholder.text(studentName).show();
            nameForm.hide();
            nameButton.show();
        }

        if (!isDetailView) setDeskChairStatuses(room);
    })

    .on('lectureStarted', function(roomStatus){
        console.info('lectureStarted');

        $('.l-room_status_info').text(roomStatus);

        $('body').prop('class', 'l-room_status--' + roomStatus);

        if (typeof thisChairId == 'number'){
            window.alert('Výklad začíná');
        }
    })

    .on('workStarted', function(roomStatus){
        console.info('workStarted');

        $('.l-room_status_info').text(roomStatus);

        $('body').prop('class', 'l-room_status--' + roomStatus);
    })
;

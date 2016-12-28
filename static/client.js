var socket = io();
var isDetailView = window.location.pathname.match('^\/desk\/(\\d+)\/chair\/(\\d+)\/$');

var nameForm = $('.l-name_form');
var nameButton = $('.l-set_name');
var namePlaceholder = $('.l-student_name');
var nameInput = $('#studentName').focus();

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

    if (namePlaceholder.text() == ''){
        nameForm.show();
        nameButton.hide();
        nameInput.focus();
    } else {
        nameForm.hide();
        nameButton.show();
    }

    nameButton.on('click', function(){
        namePlaceholder.hide();
        nameForm.toggle();
        nameButton.hide();
        nameInput.focus();
        return false;
    });

    nameForm.submit(function(event){
        socket.emit('setStudentName', thisDeskId, thisChairId, nameInput.val());
        event.preventDefault();
    });

} else { // room overview
    $('.l-buttons--teacher .l-button').click(function(){
        socket.emit($(this).data('emit'));
    });
}

socket
    .on('connect', function(){ // user authentication
        socket.on('auth-success', function(deskId, chairId){
            console.info('+++ auth-success:', 'desk', deskId, 'chair', chairId);
            $('.l-desk[data-desk-id=' + deskId + ']' + ' ' + '.l-chair[data-chair-id=' + chairId + ']')
                .addClass('l-chair--online');
        });
    })

    .on('disconnected', function(deskId, chairId){ // user disconnected: room overview
        console.info('--- disconnected', 'desk', deskId, 'chair', chairId);
        $('.l-desk[data-desk-id=' + deskId + ']' + ' ' + '.l-chair[data-chair-id=' + chairId + ']')
            .removeClass('l-chair--online');
    })

    .on('statusChanged', function(deskId, chairId, statusType){ // status changed

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

        } else { // room overview
            $('.l-desk[data-desk-id=' + deskId + ']' + ' ' + '.l-chair[data-chair-id=' + chairId + ']')
                .removeClass('l-status--not_done l-status--help l-status--done')
                .addClass('l-status--' + statusType);
        }
    })

    .on('deskStatusChanged', function(deskId, statusType){ // status changed
        if (!isDetailView){
            console.info('███ deskStatusChanged', 'desk', deskId, statusType);
            $('.l-desk[data-desk-id=' + deskId + ']' + ' .l-desk-shape')
                .removeClass('l-status--not_done l-status--help l-status--done l-status--empty l-status--init')
                .addClass('l-status--' + statusType);
        }
    })

    .on('studentNameSet', function(deskId, chairId, studentName){ // name set
        if (thisDeskId == deskId && thisChairId == chairId){
            namePlaceholder.text(studentName).show();
            nameForm.hide();
            nameButton.show();
        } else { // room overview
            $('.l-desk[data-desk-id=' + deskId + ']' + ' ' + '.l-chair[data-chair-id=' + chairId + ']')
                .text(studentName)
        }
    })

    .on('lectureStarted', function(roomStatus){
        $('.l-room_status_info').text(roomStatus);
        console.info('lectureStarted');
        $('body')
            .removeClass('l-room_status--working l-room_status--appstarted')
            .addClass('l-room_status--lecturing');

        if (typeof thisChairId == 'number'){
            window.alert('Výklad začíná');
        }
    })

    .on('workStarted', function(roomStatus){
        $('.l-room_status_info').text(roomStatus);
        console.info('workStarted');
        $('body')
            .removeClass('l-room_status--lecturing l-room_status--appstarted')
            .addClass('l-room_status--working')
        ;
    })
;

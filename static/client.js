var socket = io();
var isTeacherView = window.location.pathname.match('\/teacher$');
// student detail
var thisStudentId = window.location.pathname.match('(\/student\/)(\\d+)$');

if (thisStudentId){
    thisStudentId = parseInt(thisStudentId.slice(-1).pop());
    var statusButtons = $('.button');

    statusButtons.click(function(){
        statusButtons.removeClass('selected');
        $(this)
            .addClass('clicked')
            .closest('.buttons')
            .addClass('clicked');
        socket.emit('statusChange', thisStudentId, $(this).data('id'));
    });

    socket
        .on('connect', function(){ // user authentication
            socket.emit('auth-request', thisStudentId);
        })

        .on('checkStatusAlert', function(){ // Ask student for status
            if (confirm('\n\n\n\nHotovo? \n\n\nOK pokud ano,\n\nCancel pokud ne.\n\n\n\n\n') == true){
                socket.emit('statusChange', thisStudentId, 'done');
            } else {
                return false
            }
        })
    ;

} else if (isTeacherView){ // teacher overview
    $('button.start_work').click(function(){
        socket.emit('workStart');
    });

    $('button.check_status').click(function(){
        socket.emit('checkStatus');
    });

    $('button.start_lecture').click(function(){
        socket.emit('lectureStart');
    });

}

socket
    .on('connect', function(){ // user authentication
        socket.on('auth-success', function(studentId){
            console.info('+++ auth-success:', studentId);
            $('.student').each(function(){
                if ($(this).data('student-id') == studentId){
                    $(this).addClass('online');
                }
            });
        });
    })

    .on('disconnected', function(studentId){ // user disconnected: teacher overview
        console.info('student', studentId, 'disconnected');
        $('.student').each(function(){
            if ($(this).data('student-id') == studentId){
                $(this).removeClass('online');
            }
        });
    })

    .on('statusChanged', function(studentId, statusType){ // status changed

        if (thisStudentId == studentId){ // has this student's status changed?
            statusButtons.each(function(){
                $(this).removeClass('clicked selected');
                if ($(this).data('id') == statusType){
                    $(this)
                        .addClass('selected')
                        .closest('.buttons')
                        .removeClass('clicked');
                }
            });

        } else { // teacher and overview
            $('.student').each(function(){
                if ($(this).data('student-id') == studentId){
                    $(this).removeClass('not_done help done').addClass(statusType);
                }
            });
        }
    })

    .on('lectureStarted', function(classStatus){
        $('.status_info').text(classStatus);
        console.info('lectureStarted');
        $('body')
            .removeClass('status_working status_appstarted')
            .addClass('status_lecturing');
        if (thisStudentId) window.alert('Výklad začíná');
    })

    .on('workStarted', function(classStatus){
        $('.status_info').text(classStatus);
        console.info('workStarted');
        $('body')
            .removeClass('status_lecturing status_appstarted')
            .addClass('status_working')
        ;
    })
;

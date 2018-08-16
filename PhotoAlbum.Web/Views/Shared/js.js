    $(document).ready(function () {
        $.ajax({
            type: 'Get',
            url: '/api/Images/',
        }).success(function (data) {

            $.each(data.data, function (k, v) {
                /// do stuff
            });

        }).fail(function (data) {
            alert("В процесе регистрации возникла ошибка");
        });

    });

    $(function () {
        $('#submit').click(function () {
            var id = 12;
            $.ajax({
                type: "GET",
                url: "/api/Images/",
                data: {
                    'id': id
                }, // sets id value in GET method on ImageController
            }).success(function (data) {
                $('#my_image').attr('src', data.localPath);
            }).fail(function (data) {
                alert('fail');

            });
        });
    })
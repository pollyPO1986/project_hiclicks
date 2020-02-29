if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
  $('.selectpicker').selectpicker('mobile');
}

(function($) {
    //-mega menu
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, false).slideDown("200");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, false).slideUp("400");
            $(this).toggleClass('open');
        }
    );

    //-sidenav
    $("li.drup-add .plus").click(function(e) {
        $(this).parent().children('ul').slideToggle('500');
        $(this).toggleClass('clicked');
    });

    $(".faq_d").click(function(e) {
        $(this).parent().children('ul').slideToggle('500');
        $(this).toggleClass('clicked');
    });

    //-text script
    $('.newsbar').textslider({
        direction: 'scrollUp', //-捲動方向: scrollUp向上, scrollDown向下
        scrollNum: 1, //- 一次捲動幾個元素
        scrollSpeed: 800, //-捲動速度(ms)
        pause: 3200 //-停頓時間(ms)
    });
    
    $('.mobilenews').textslider({
        direction: 'scrollUp',
        scrollNum: 1,
        scrollSpeed: 800,
        pause: 3200
    });

    //-數量
    $(".store_num").WanSpinner({
        maxValue: 200,
        minValue: 1,
        start: 1,
        inputWidth: 40
    });

    //-購物車表格
    $('.tablestyle').footable();

    //- 會員專區 - 會員驗證
    $("#idfront_up").fileinput({
        showCaption: false,
        language: 'zh-TW',
        browseClass: 'btn btn_black',
        removeClass: 'btn btn_black',
        cancelClass: 'btn btn_black',
        uploadClass: 'btn btn_black',
        browseLabel: '請選擇檔案...'
    });
    $("#idback_up").fileinput({
        showCaption: false,
        language: 'zh-TW',
        browseClass: 'btn btn_black',
        removeClass: 'btn btn_black',
        cancelClass: 'btn btn_black',
        uploadClass: 'btn btn_black',
        browseLabel: '請選擇檔案...'
    });
    $("#paper_up").fileinput({
        showCaption: false,
        language: 'zh-TW',
        browseClass: 'btn btn_black',
        removeClass: 'btn btn_black',
        cancelClass: 'btn btn_black',
        uploadClass: 'btn btn_black',
        browseLabel: '請選擇檔案...'
    });

    //- 常見問題
    $(".accordion-toggle").click(function(e) {
        $(this).toggleClass('clicked');
    });

    //- 聯絡我們
    $('#file_up').fileinput({
        language: 'zh-TW',
        browseClass: 'btn btn_black',
        removeClass: 'btn btn_black',
        cancelClass: 'btn btn_black',
        uploadClass: 'btn btn_black',
        maxFileCount: 1,
        msgPlaceholder: '請選擇需上傳的{files}'
    });

    //- 會員專區-商品上架
    $('#file_up_two').fileinput({
        language: 'zh-TW',
        browseClass: 'btn btn_black',
        browseLabel: '上傳圖片',
        removeClass: 'btn btn_black',
        cancelClass: 'btn btn_black',
        uploadClass: 'btn btn_black',
        msgPlaceholder: '請選擇需上傳的{files}'
    });

    //-會員專區-基本資料
    $("#photos").fileinput({
        overwriteInitial: true,
        maxFileSize: 2048,
        showClose: false,
        showCaption: false,
        browseLabel: '',
        removeLabel: '',
        browseClass: 'btn btn_search',
        removeClass: 'btn btn_search',
        browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
        removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
        removeTitle: '刪除照片',
        elErrorContainer: '#kv-avatar-errors-1',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img src="images/user_defulat.png" alt="您的大頭照">',
        layoutTemplates: { main2: '{preview} ' + ' {browse} {remove}' },
        allowedFileExtensions: ["jpg", "png", "gif"]
    });
    // $("#photos").fileinput({
    //     overwriteInitial: true,
    //     maxFileSize: 2048,
    //     showClose: false,
    //     showCaption: false,
    //     browseLabel: '',
    //     removeLabel: '',
    //     uploadLabel: '',
    //     uploadClass: 'btn btn-info',
    //     browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
    //     removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
    //     uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
    //     removeTitle: '刪除照片',
    //     uploadTitle: '上傳大頭照',
    //     elErrorContainer: '#kv-avatar-errors-1',
    //     msgErrorClass: 'alert alert-block alert-danger',
    //     defaultPreviewContent: '<img src="images/user_defulat.png" alt="您的大頭照">',
    //     layoutTemplates: { main2: '{preview} ' + ' {remove} {upload} {browse}' },
    //     allowedFileExtensions: ["jpg", "png", "gif"]
    // });

    $('#datetimepicker').datetimepicker({
        locale: 'zh-tw',
        format: 'YYYY/MM/DD',
        useCurrent: false
    });

    //-代購單
    $("#addhelplist").click(function() {
        $(".helpbuy_needs").append(
            $(".help_li_form").html()
        );
    });
    $(".helplist_del").click(function() {
        $(this).parent.remove();
    });
    // $(".helpbuy_needs li").on("click",".helplist_del",function() {
    //     $(this).parents.remove();
    // });

    //-Sweetalert hi幣兌換區
    $(".getgift").click(function() {
        swal({
            title: '確認兌換商品?',
            text: "確認兌換，將扣除500枚Hi 幣!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '確認兌換',
            cancelButtonText: '取消'
        }).then((result) => {
            if (result.value) {
                swal(
                    '兌換成功!',
                    '請填寫正確的收件人資料',
                    'success'
                )
            }
        })
    });

    //-Sweetalert 歷史訂單-購買清單區
    $(".order-cancel").click(function() {
        swal({
            title: '確認兌換商品?',
            text: "確認兌換，將扣除500枚Hi 幣!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '確認兌換',
            cancelButtonText: '取消'
        }).then((result) => {
            if (result.value) {
                swal(
                    '兌換成功!',
                    '請填寫正確的收件人資料',
                    'success'
                )
            }
        })
    });

    $(".order-overtime").click(function() {
        swal({
            title: '確認兌換商品?',
            text: "確認兌換，將扣除500枚Hi 幣!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '確認兌換',
            cancelButtonText: '取消'
        }).then((result) => {
            if (result.value) {
                swal(
                    '兌換成功!',
                    '請填寫正確的收件人資料',
                    'success'
                )
            }
        })
    });
    //fancyBox
    $('[data-type="image"]').fancybox({
        idleTime: false,
        baseClass: 'fancybox-custom-layout',
        margin: 0,
        gutter: 0,
        infobar: false,
        thumbs: {
            hideOnClose: false,
            parentEl: '.fancybox-outer'
        },
        touch: {
            vertical: false
        },
        buttons: [
            'close',
            'thumbs'
        ],
        animationEffect: "fade",
        animationDuration: 300,
        onInit: function(instance) {
            instance.$refs.inner.wrap('<div class="fancybox-outer"></div>');
        }
    });
    $.fancybox.defaults.hash = false;
})(jQuery);
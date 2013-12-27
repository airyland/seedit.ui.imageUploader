define(function(require, exports, module) {

    require('./swfupload.js');
    var imageUploader;
    var simpleUploader;
    var defaultOption = {
        upload_url: "http://image.office.bozhong.com/upload.php",
        flash_url: "http://172.16.5.98/common/ui/imageUploader/src/swfupload.swf",
        file_size_limit: "20 MB",
        post_params: {
            class: 'cms'
        },
        button_width: 72,
        button_height: 23,
        file_post_name: "file",
        button_image_url: "http://172.16.5.98/common/ui/imageUploader/src/button.png"
    };

    (function($) {
        var option = {
            custom_settings: {
                progressTarget: "x-upload-progress",
            },
            // 选择文件后
            fileQueued: function(file) {},
            /* fileDialogComplete: function(selected, queued, total) {
                console.log(selected, queued, total);
            },*/
            // 上传进度查询
            upload_progress_handler: function(file, uploaded, all) {

            },
            //上传完成
            upload_success_handler: function(file, data, receiveResponse) {
                data = JSON.parse(data);
            }
        };

        $.extend(option, defaultOption);

        simpleUploader = function(opt) {
            var target = opt.trigger;
            var callback = opt.callback;
            var type = opt.type || 'cms';
            $.extend(option, {
                button_placeholder_id: target,
                post_params: {
                    class: type
                },
                upload_success_handler: function(file, data) {
                    data = JSON.parse(data);
                    callback(data);
                },
                file_dialog_complete_handler: function(numFilesSelected, numFilesQueued) {
                    this.startUpload();
                    try {
                        this.startUpload();
                    } catch (ex) {
                        this.debug(ex);
                    }
                }
            });
            // 如果还有swfupload设置
            if (opt.option) {
                $.extend(option, opt.option);
            }
            return new SWFUpload(option);
        };
    })(jQuery);

    module.exports = {
        // 自动上传一个图片
        simpleUploader: simpleUploader,
        customUploader: function(options) {
            $.extend(option, options);
            return new SWFUpload(option);
        }
    };
});
# 演示文档

---
<style>
    #test {border-radius:2px;border:1px solid #ececec;}
</style>

## 单个图片自动上传

````html
<!--设置上传按钮标签-->
<button id="test"></button>
````

<div id="test_out"></div>

````javascript
seajs.use('imageUploader', function(imageUploader) {
    (function($) {
        var uploader = imageUploader.simpleUploader({
            trigger: 'test',
            callback: function(data) {
                $('#test_out').html('<img width="300" style="max-height:100px;" src="' + data.data.url + '">' + '<br/>上传成功，地址是:' + '<br/><code>'+data.data.url+'</code>');
            }
        });
    })(jQuery);
});

````
## 复杂的自定义参数上传
待完善
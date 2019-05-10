$(document).ready(function () {
    if (window.File && window.FileList && window.FileReader) {
        console.log($("#files"));
        $("#files").on("change", function (e) {
            var files = e.target.files,
                filesLength = files.length;
            $(".num-imgs-chosen").prop('value',`${filesLength} images chosen`);
            for (var i = 0; i < filesLength; i++) {
                var file = files[i];
                var fileReader = new FileReader();
                fileReader.onload = (function (e) {
                    $("<span class=\"pip\">" +
                        "<img class=\"imageThumb\" src=\"" + e.target.result + "\"/>" +
                        "<br/><span class=\"remove\">Remove</span>" +
                        "</span>").insertAfter(".review-img-area");
                    $(".remove").click(function () {
                        $(this).parent(".pip").remove();
                        filesLength = filesLength-1;
                        $(".num-imgs-chosen").prop('value',`${filesLength} images chosen`);
                    });

                });
                fileReader.readAsDataURL(file);
            }
        });
    } else {
        alert("Your browser doesn't support to File API");
    }
});
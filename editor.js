
onload = () => {
    initEditor("#editor");
}

function initEditor(selector) {
  // editor initialization code
  ClassicEditor.create(document.querySelector(selector), {
    // Editor configuration.
  })
    .then((editor) => {
      window.editor = editor;
    })
    .catch(handleSampleError);

  function handleSampleError(error) {
    const issueUrl = "https://github.com/ckeditor/ckeditor5/issues";

    const message = [
      "Oops, something went wrong!",
      `Please, report the following error on ${issueUrl} with the build id "nb028vkyevcc-3b2h6ow0ygl0" and the error stack trace:`,
    ].join("\n");

    console.error(message);
    console.error(error);
  }
}

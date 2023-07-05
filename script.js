console.log('script loaded');
$(document).ready(onReady);

function onReady() {
    console.log('inside on ready')
    tableDisplay();
}

function tableDisplay() {
    $('#example').DataTable();
}
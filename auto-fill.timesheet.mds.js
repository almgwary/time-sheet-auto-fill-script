// fill method
function play() {
    document.getElementById('MainContent_CtrlTimesheet_rptDailyView_txtHours_0').value = '8';
    document.getElementById('MainContent_CtrlTimesheet_rptDailyView_txtComment_0').value = 'working day';
    document.getElementById('MainContent_CtrlTimesheet_btnSave').click();
}

// pick empty day method
function pickDay() {
    var elements = document.querySelectorAll('#MainContent_CtrlTimesheet_rptMonthlyView_itemTemplateRow_0 > td:not([bgcolor="#E4E4E4"]) > a');
    for (const element of elements) {
        const text = element.innerHTML;
        if (!text) {
            const herf = element.href;
            const day = herf && new URL(herf).searchParams.get('Month');
            console.log('Picking: ', day);
            window.location.href = herf;
            break;
        }
    }
}


// pick or fill
const currentDayLabel = document.getElementById('MainContent_CtrlTimesheet_rptDailyView_lblHours_0');
const isCurrentDayEmpty = currentDayLabel && !currentDayLabel.innerHTML;
const editButton =  document.getElementById('MainContent_CtrlTimesheet_btnEdit');

if(isCurrentDayEmpty) {
    console.log('Clicking edit');
    editButton.click() ;
} else if(!currentDayLabel) {
    console.log('Filling day');
     play();
} else if (!isCurrentDayEmpty &&  currentDayLabel) {
    console.log('Picking day');
    pickDay();
}





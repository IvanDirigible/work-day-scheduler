var saveBtn = $(".saveBtn");
var timeBlock;
var timeBlockNum;
var currentDate = dayjs().format("MMMM D, YYYY");
var currentHour = dayjs().format("HH");

saveBtn.on("click", function() {
  var timeBlock = $(this).parent().attr("id");
  var description = $(this).siblings(".description").val();
  localStorage.setItem(timeBlock, description);
  console.log(`${description} stored at ${timeBlock}`);
});

function addTense() {
  $(".time-block").each(function() {
    timeBlockNum = $(this).attr("id").match(/\d+$/)[0];
    if (timeBlockNum < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockNum === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  })
};

function userMemory() {
  $(".description").each(function() {
    timeBlock = $(this).parent().attr("id");
    recall = localStorage.getItem(timeBlock);
    $(this).val(recall);
    console.log(`Recalling ${recall} at ${timeBlock}.`);
  })
};

$("#currentDay").text(currentDate);

addTense();
userMemory();
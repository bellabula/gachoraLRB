$("#editProfile").click(() => {
    $("#profile").addClass("d-none")
    $("#profileEdit").removeClass("d-none")
})
$("#confirmEdit").click(() => {
    $("#profileEdit").addClass("d-none")
    $("#profile").removeClass("d-none")
})
$(document).ready(function () {
    // 增加按鈕點擊事件
    $('.btn-increase').on('click', function () {
        let input = $(this).siblings('input');
        let currentValue = parseInt(input.val());
        if (currentValue < $(this).parent().parent().parent().children().eq(4).text()) {
            input.val(currentValue + 1);
        }
    });

    // 減少按鈕點擊事件
    $('.btn-decrease').on('click', function () {
        let input = $(this).siblings('input');
        let currentValue = parseInt(input.val());
        if (currentValue > 0) {
            input.val(currentValue - 1);
        }
    });

    // 出貨按鈕狀態切換
    $('.checkbox-style').on('click', function () {
        $(this).toggleClass('active');
        $(this).find('input[type="checkbox"]').prop('checked', $(this).hasClass('active'));
    });
});

$(document).on('click', function (event) {
    const classFilterList = [$('#memberStore .classFilter'), $('#memberWallet .classFilter'), $($('#memberWallet .itemFilter')[0]), $($('#memberWallet .itemFilter')[1])]
    // 檢查點擊是否發生在目標元素外部
    classFilterList.forEach(element => {
        if (!element.is(event.target) && element.has(event.target).length === 0) {
            element.css('visibility', 'hidden');
        }
    })
});

const filerBtnList = [[$("#memberStore .classFilterBtn"), $("#memberStore .classFilter")],
[$("#memberWallet .classFilterBtn"), $("#memberWallet .classFilter")],
[$($('#memberWallet .itemFilterBtn')[0]), $($('#memberWallet .itemFilter')[0])],
[$($('#memberWallet .itemFilterBtn')[1]), $($('#memberWallet .itemFilter')[1])]]
filerBtnList.forEach(element => {
    element[0].click(() => {
        event.stopPropagation();
        element[1].css("visibility", "visible")
    })
});


const dateInput = document.getElementById('dateInput');

// 取得今天的日期，並格式化為 YYYY-MM-DD
const today = new Date();
const formattedDate = today.toISOString().split('T')[0];

// #memberWallet 
$("#memberWallet .orderStartDate").prop("max", formattedDate)
$("#memberWallet .orderEndDate").prop("max", formattedDate)

$("#memberWallet .orderStartDate").on("input", () => {
    $("#memberWallet .orderStartText").val($("#memberWallet .orderStartDate").val())
    $("#memberWallet .orderEndDate").prop("min", $("#memberWallet .orderStartDate").val())
})
$("#memberWallet .orderEndDate").on("input", () => {
    $("#memberWallet .orderEndText").val($("#memberWallet .orderEndDate").val())
    $("#memberWallet .orderStartDate").prop("max", $("#memberWallet .orderEndDate").val())
})

// #memberOrder
$("#memberOrder .orderStartDate").prop("max", formattedDate)
$("#memberOrder .orderEndDate").prop("max", formattedDate)

$("#memberOrder .orderStartDate").on("input", () => {
    $("#memberOrder .orderStartText").val($("#memberOrder .orderStartDate").val())
    $("#memberOrder .orderEndDate").prop("min", $("#memberOrder .orderStartDate").val())
})
$("#memberOrder .orderEndDate").on("input", () => {
    $("#memberOrder .orderEndText").val($("#memberOrder .orderEndDate").val())
    $("#memberOrder .orderStartDate").prop("max", $("#memberOrder .orderEndDate").val())
})

$("#editPwdBtn").click(()=>{
    $("#pwdSection").css("display", "block")
    $("#editPwdBtn").css("display", "none")
})
$("#confirmPwdBtn").click(()=>{
    $("#pwdSection").css("display", "none")
    $("#editPwdBtn").css("display", "inline")
})
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {

    const user = usePage().props.auth.user;
    $(document).ready(function () {
        $("#editProfile").click(() => {
            $("#profile").addClass("d-none")
            $("#profileEdit").removeClass("d-none")
        })
        $("#confirmEdit").click(() => {
            $("#profileEdit").addClass("d-none")
            $("#profile").removeClass("d-none")
        })
        // 增加按鈕點擊事件
        $('#member .btn-increase').on('click', function () {
            let input = $(this).siblings('input');
            let currentValue = parseInt(input.val());
            if (currentValue < $(this).parent().parent().parent().children().eq(4).text()) {
                input.val(currentValue + 1);
            }
        });

        // 減少按鈕點擊事件
        $('#member .btn-decrease').on('click', function () {
            let input = $(this).siblings('input');
            let currentValue = parseInt(input.val());
            if (currentValue > 0) {
                input.val(currentValue - 1);
            }
        });

        // 出貨按鈕狀態切換
        $('#member .checkbox-style').on('click', function () {
            $(this).toggleClass('active');
            $(this).find('input[type="checkbox"]').prop('checked', $(this).hasClass('active'));
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

        $("#editPwdBtn").click(() => {
            $("#pwdSection").css("display", "block")
            $("#editPwdBtn").css("display", "none")
        })
        $("#confirmPwdBtn").click(() => {
            $("#pwdSection").css("display", "none")
            $("#editPwdBtn").css("display", "inline")
        })
    });

    return (
        <AuthenticatedLayout>
            <Head title="Member" />
            <main className="container container-xxl" id='member'>
                <div className="row pt-5 pb-5 align-items-center">
                    <div className="col-8"><img src="http://localhost/gachoraLRB/public/images/diamond.svg" alt="" width="50px" className="me-4" />
                        <span className="h4"><b>{user.name}</b> 您好!</span></div>
                    <div className="col-4">
                        <p className="h2 d-inline-block">G幣餘額</p><button className="rounded-5 float-end">儲值G幣</button>
                        <div className="h2 text-end mb-0">XXXXXXXXX</div>
                        <div className="text-end w-100" style={{ color: "gray" }}>xxx G幣將在2025/12/31到期</div>
                    </div>
                </div>
                {/* <!-- Tabs --> */}
                <div className="custom-section">
                    <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#memberWall" data-bs-toggle="pill">戰利牆</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#memberFavor" data-bs-toggle="pill">收藏清單</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#memberStore" data-bs-toggle="pill">戰利儲藏庫</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#memberWallet" data-bs-toggle="pill">我的錢包</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#memberOrder" data-bs-toggle="pill">我的訂單</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#memberProfile" data-bs-toggle="pill">基本資料</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content pt-5">
                    {/* <!-- 1. 戰利牆 --> */}
                    <div id="memberWall" className="tab-pane active">
                        <div className="container">
                            {/* <!-- 成就 --> */}
                            <div>
                                <h2 className="text-center fw-bolder my-5">成就</h2>
                                <div className="d-flex justify-content-between">
                                    <button className="btn"><img src="http://localhost/gachoraLRB/public/images/arrowLeft.svg" /></button>
                                    <div className="d-flex gap-3 flex-wrap">
                                        <img src="http://localhost/gachoraLRB/public/images/dodolong.png" className="circle-container" />
                                        <img src="http://localhost/gachoraLRB/public/images/dodolong.png" className="circle-container" />
                                        <img src="http://localhost/gachoraLRB/public/images/dodolong.png" className="circle-container" />
                                        <img src="http://localhost/gachoraLRB/public/images/dodolong.png" className="circle-container" />
                                        <img src="http://localhost/gachoraLRB/public/images/dodolong.png" className="circle-container" />
                                        <img src="http://localhost/gachoraLRB/public/images/dodolong.png" className="circle-container" />
                                    </div>
                                    <button className="btn"><img src="http://localhost/gachoraLRB/public/images/arrowRight.svg" /></button>
                                </div>
                            </div>

                            {/* <!-- 抽獎獲利檔 --> */}
                            <div className="mt-4">
                                <h2 className="text-center fw-bolder my-5">扭蛋戰利品</h2>
                                <div className="d-flex justify-content-between" style={{ backgroundColor: "var(--main-darkblue)" }}>
                                    <button className="btn"><img src="http://localhost/gachoraLRB/public/images/arrowLeft.svg" /></button>
                                    <div className="d-flex gap-3 flex-wrap">
                                        <div>
                                            <img src="http://localhost/gachoraLRB/public/images/gachoTop.svg" className="d-block" style={{ height: "80px", position: "relative", bottom: "-20px" }} />
                                            <img src="http://localhost/gachoraLRB/public/images/dodolong.png" />
                                            <img src="http://localhost/gachoraLRB/public/images/gachoBotton.svg" className="d-block" style={{ height: "100px", objectFit: "contain" }} />
                                        </div>
                                        <div>
                                            <img src="http://localhost/gachoraLRB/public/images/gachoTop.svg" className="d-block" style={{ height: "80px", position: "relative", bottom: "-20px" }} />
                                            <img src="http://localhost/gachoraLRB/public/images/dodolong.png" />
                                            <img src="http://localhost/gachoraLRB/public/images/gachoBotton.svg" className="d-block" style={{ height: "100px", objectFit: "contain" }} />
                                        </div>
                                        <div>
                                            <img src="http://localhost/gachoraLRB/public/images/gachoTop.svg" className="d-block" style={{ height: "80px", position: "relative", bottom: "-20px" }} />
                                            <img src="http://localhost/gachoraLRB/public/images/dodolong.png" />
                                            <img src="http://localhost/gachoraLRB/public/images/gachoBotton.svg" className="d-block" style={{ height: "100px", objectFit: "contain" }} />
                                        </div>
                                        <div>
                                            <img src="http://localhost/gachoraLRB/public/images/gachoTop.svg" className="d-block" style={{ height: "80px", position: "relative", bottom: "-20px" }} />
                                            <img src="http://localhost/gachoraLRB/public/images/dodolong.png" />
                                            <img src="http://localhost/gachoraLRB/public/images/gachoBotton.svg" className="d-block" style={{ height: "100px", objectFit: "contain" }} />
                                        </div>
                                    </div>
                                    <button className="btn"><img src="http://localhost/gachoraLRB/public/images/arrowRight.svg" /></button>
                                </div>
                            </div>

                            {/* <!-- 一番賞獲利檔 --> */}
                            <div className="mt-4">
                                <h2 className="text-center fw-bolder my-5">一番賞戰利品</h2>
                                <div className="d-flex justify-content-between">
                                    <button className="btn"><img src="http://localhost/gachoraLRB/public/images/arrowLeft.svg" /></button>
                                    <div className="d-flex gap-3 flex-wrap">
                                        <img src="http://localhost/gachoraLRB/public/images/ichiban1.png" />
                                        <img src="http://localhost/gachoraLRB/public/images/ichiban1.png" />
                                        <img src="http://localhost/gachoraLRB/public/images/ichiban1.png" />
                                        <img src="http://localhost/gachoraLRB/public/images/ichiban1.png" />
                                        <img src="http://localhost/gachoraLRB/public/images/ichiban1.png" />
                                        <img src="http://localhost/gachoraLRB/public/images/ichiban1.png" />
                                    </div>
                                    <button className="btn"><img src="http://localhost/gachoraLRB/public/images/arrowRight.svg" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 2. 收藏清單 --> */}
                    <div id="memberFavor" className="tab-pane">
                        <div className="favor-section">
                            <ul className="nav nav-pills justify-content-center nav-justified">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#gachofavor" data-bs-toggle="pill">扭蛋收藏</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#ichibanfavor" data-bs-toggle="pill">一番賞收藏</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content pt-5">
                            <div id="gachofavor" className="tab-pane active">
                                <div className="row  row-gap-2">
                                    <div className="col-3"><a href=""><img className="w-100" src="http://localhost/gachoraLRB/public/images/gachoMachineA.png" alt="" /></a>
                                    </div>
                                    <div className="col-3"><a href=""><img className="w-100" src="http://localhost/gachoraLRB/public/images/gachoMachineA.png" alt="" /></a>
                                    </div>
                                    <div className="col-3"><a href=""><img className="w-100" src="http://localhost/gachoraLRB/public/images/gachoMachineA.png" alt="" /></a>
                                    </div>
                                    <div className="col-3"><a href=""><img className="w-100" src="http://localhost/gachoraLRB/public/images/gachoMachineA.png" alt="" /></a>
                                    </div>
                                    <div className="col-3"><a href=""><img className="w-100" src="http://localhost/gachoraLRB/public/images/gachoMachineA.png" alt="" /></a>
                                    </div>
                                    <div className="col-3"><a href=""><img className="w-100" src="http://localhost/gachoraLRB/public/images/gachoMachineA.png" alt="" /></a>
                                    </div>
                                    <div className="col-3"><a href=""><img className="w-100" src="http://localhost/gachoraLRB/public/images/gachoMachineA.png" alt="" /></a>
                                    </div>
                                    <div className="col-3"><a href=""><img className="w-100" src="http://localhost/gachoraLRB/public/images/gachoMachineA.png" alt="" /></a>
                                    </div>
                                    <div className="col-3"><a href=""><img className="w-100" src="http://localhost/gachoraLRB/public/images/gachoMachineA.png" alt="" /></a>
                                    </div>
                                    <div className="col-3"><a href=""><img className="w-100" src="http://localhost/gachoraLRB/public/images/gachoMachineA.png" alt="" /></a>
                                    </div>
                                    <div className="col-3"><a href=""><img className="w-100" src="http://localhost/gachoraLRB/public/images/gachoMachineA.png" alt="" /></a>
                                    </div>
                                    <div className="col-3"><a href=""><img className="w-100" src="http://localhost/gachoraLRB/public/images/gachoMachineA.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div id="ichibanfavor" className="tab-pane">
                                <h1>一番賞收藏</h1>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 3. 戰利儲藏庫 --> */}
                    <div id="memberStore" className="tab-pane">
                        <h1>戰利儲藏庫</h1>
                        <div className="container my-5">
                            <div className="inventory-container">
                                <table className="w-100 text-center">
                                    <thead>
                                        <tr className="border-0">
                                            <th className="text-start">商品圖片</th>
                                            <th className="text-start">商品名稱</th>
                                            <th>賞別</th>
                                            <th>系列</th>
                                            <th>擁有數量</th>
                                            <th>抽扭日期</th>
                                            <th>選取數量</th>
                                            <th>兌換G幣</th>
                                            <th className="position-relative">
                                                <div className="d-flex align-items-center justify-content-center">
                                                    幫我出貨
                                                    <button className="position-absolute classFilterBtn"
                                                        style={{ borderRadius: "5px", right: "-15px" }}>+</button>
                                                    <div className="position-absolute classFilter"
                                                        style={{ visibility: "hidden", padding: "5px", textAlign: "left", border: "1px solid var(--main-darkblue)", borderRadius: "5px", backgroundColor: "var(--main-bg-gray)", color: "black", right: "-130px", bottom: "-150px" }}>
                                                        <form action="">
                                                            <input type="checkbox" defaultChecked /> 商品圖片 <br />
                                                            <input type="checkbox" defaultChecked /> 商品名稱 <br />
                                                            <input type="checkbox" defaultChecked /> 賞別 <br />
                                                            <input type="checkbox" defaultChecked /> 系列 <br />
                                                            <input type="checkbox" defaultChecked /> 抽/扭日期 <br />
                                                            <input type="checkbox" defaultChecked /> 用有數量 <br />
                                                        </form>
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-start">
                                                <span>1.</span>
                                                <img src="" alt="商品圖片" />
                                            </td>
                                            <td className="text-start">龍貓等公車xczczxcxz</td>
                                            <td>A獎</td>
                                            <td>宮崎駿001</td>
                                            <td>3</td>
                                            <td>2024/01/03<br />2024/05/10<br />2024/10/15</td>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <button className="btn btn-secondary btn-circle btn-decrease">-</button>
                                                    <input type="text" value="0" className="form-control mx-2 text-center"
                                                        style={{ width: "50px" }} readOnly />
                                                    <button className="btn btn-secondary btn-circle btn-increase">+</button>
                                                </div>
                                            </td>
                                            <td width="100px">
                                                <button className="btn btn-exchange">兌換G幣</button>
                                            </td>
                                            <td width="100px">
                                                <button className="btn btn-deli">幫我出貨</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">
                                                <span>2.</span>
                                                <img src="" alt="商品圖片" />
                                            </td>
                                            <td className="text-start">龍貓等公車</td>
                                            <td>A獎</td>
                                            <td>宮崎駿001</td>
                                            <td>1</td>
                                            <td>2024/11/12</td>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <button className="btn btn-secondary btn-circle btn-decrease">-</button>
                                                    <input type="text" value="0" className="form-control mx-2 text-center"
                                                        style={{ width: "50px" }} readOnly />
                                                    <button className="btn btn-secondary btn-circle btn-increase">+</button>
                                                </div>
                                            </td>
                                            <td width="100px">
                                                <button className="btn btn-exchange">兌換G幣</button>
                                            </td>
                                            <td width="100px">
                                                <button className="btn btn-deli">幫我出貨</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">
                                                <span>3.</span>
                                                <img src="" alt="商品圖片" />
                                            </td>
                                            <td className="text-start">龍貓等公車</td>
                                            <td>A獎</td>
                                            <td>宮崎駿001</td>
                                            <td>5</td>
                                            <td>2024/11/15<br />2024/11/15<br />2024/11/15<br />2024/11/22<br />2024/12/05</td>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <button className="btn btn-secondary btn-circle btn-decrease">-</button>
                                                    <input type="text" value="0" className="form-control mx-2 text-center"
                                                        style={{ width: "50px" }} readOnly />
                                                    <button className="btn btn-secondary btn-circle btn-increase">+</button>
                                                </div>
                                            </td>
                                            <td width="100px">
                                                <button className="btn btn-exchange">兌換G幣</button>
                                            </td>
                                            <td width="100px">
                                                <button className="btn btn-deli">幫我出貨</button>
                                            </td>
                                        </tr>
                                        {/* <!-- Add more rows as needed --> */}
                                    </tbody>
                                </table>
                            </div>
                            <p className="note mt-4">商品取貨規則：</p>
                            <ul>
                                <li>單筆寄送僅接受一次選擇。</li>
                                <li>以超商寄取，單筆記錄依 7-11 寄付規定。</li>
                                <li>若商品在聯絡時間3個月後仍未處理，則會「自動兌換成對應G幣」。</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- 4. 我的錢包 --> */}
                    <div id="memberWallet" className="tab-pane">
                        <p className="h1 d-inline-block me-3">G幣交易紀錄</p>
                        <form className="d-inline-block">
                            <input className="date-input orderStartText" type="text" placeholder="起始日" readOnly />
                            <span className="datepicker-toggle">
                                <span className="datepicker-toggle-button"></span>
                                <input type="date" className="datepicker-input orderStartDate" />
                            </span>
                            <span> ~ </span>
                            <input className="date-input orderEndText" type="text" placeholder="結束日" readOnly />
                            <span className="datepicker-toggle">
                                <span className="datepicker-toggle-button"></span>
                                <input type="date" className="datepicker-input orderEndDate" />
                            </span>
                            <button className="rounded-1">查詢</button>
                        </form>
                        <hr />
                        <div>
                            <table className="w-100 text-center">
                                <thead>
                                    <tr className="text-center border-0">
                                        <th className="text-start">交易日期</th>
                                        <th>物品</th>
                                        <th className="position-relative">
                                            <div className="d-flex align-items-center justify-content-center">
                                                類型 &ensp;
                                                <button className="itemFilterBtn">⋯</button>
                                            </div>
                                            <div className="position-absolute itemFilter"
                                                style={{ visibility: "hidden", padding: "5px", textAlign: "left", border: "1px solid var(--main-darkblue)", borderRadius: "5px", backgroundColor: "var(--main-darkblue)", color: "white", right: "-50px", bottom: "-110px" }}>
                                                <form action="">
                                                    <input type="checkbox" defaultChecked /> 扭蛋 <br />
                                                    <input type="checkbox" defaultChecked /> 一番賞 <br />
                                                    <input type="checkbox" defaultChecked /> 訂單 <br />
                                                    <input type="checkbox" defaultChecked /> 生日禮 <br />
                                                </form>
                                            </div>
                                        </th>
                                        <th>數量</th>
                                        <th>總計</th>
                                        <th className="position-relative">
                                            <div className="d-flex align-items-center justify-content-center">
                                                付款方式 &ensp;
                                                <button className="itemFilterBtn">⋯</button>
                                            </div>
                                            <div className="position-absolute itemFilter"
                                                style={{ visibility: "hidden", padding: "5px", textAlign: "left", border: "1px solid var(--main-darkblue)", borderRadius: "5px", backgroundColor: "var(--main-darkblue)", color: "white", right: "-50px", bottom: "-110px" }}>
                                                <form action="">
                                                    <input type="checkbox" defaultChecked /> G 幣 <br />
                                                    <input type="checkbox" defaultChecked /> 信用卡 <br />
                                                    <input type="checkbox" defaultChecked /> 轉帳 <br />
                                                    <input type="checkbox" defaultChecked /> 超商付款 <br />
                                                </form>
                                            </div>
                                        </th>
                                        <th>G 幣變更</th>
                                        <th className="position-relative">
                                            <div className="d-flex align-items-center justify-content-center">
                                                G 幣餘額
                                                <button className="position-absolute classFilterBtn"
                                                    style={{ borderRadius: "5px", right: "-15px" }}>+</button>
                                            </div>
                                            <div className="position-absolute classFilter"
                                                style={{ visibility: "hidden", padding: "5px", textAlign: "left", border: "1px solid var(--main-darkblue)", borderRadius: "5px", backgroundColor: "var(--main-darkblue)", color: "white", right: "-130px", bottom: "-190px" }}>
                                                <form action="">
                                                    <input type="checkbox" defaultChecked /> 交易日期 <br />
                                                    <input type="checkbox" defaultChecked /> 物品 <br />
                                                    <input type="checkbox" defaultChecked /> 類型 <br />
                                                    <input type="checkbox" defaultChecked /> 數量 <br />
                                                    <input type="checkbox" defaultChecked /> 總計 <br />
                                                    <input type="checkbox" defaultChecked /> 付款方式 <br />
                                                    <input type="checkbox" defaultChecked /> G幣變更 <br />
                                                    <input type="checkbox" defaultChecked /> G幣餘額 <br />
                                                </form>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-start">2024/11/20</td>
                                        <td>XXX扭蛋</td>
                                        <td>扭蛋</td>
                                        <td>10</td>
                                        <td>G 1,200</td>
                                        <td>G 幣</td>
                                        <td>-G 1200</td>
                                        <td>G 1,650</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">2024/11/20</td>
                                        <td>XXX扭蛋</td>
                                        <td>扭蛋</td>
                                        <td>10</td>
                                        <td>G 1,200</td>
                                        <td>G 幣</td>
                                        <td>-G 1200</td>
                                        <td>G 1,650</td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">2024/11/20</td>
                                        <td>XXX扭蛋</td>
                                        <td>扭蛋</td>
                                        <td>10</td>
                                        <td>G 1,200</td>
                                        <td>G 幣</td>
                                        <td>-G 1200</td>
                                        <td>G 1,650</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <!-- 5. 我的訂單 --> */}
                    <div id="memberOrder" className="tab-pane">
                        <p className="h1 d-inline-block me-3">我的訂單</p>
                        <form className="d-inline-block">
                            <input className="date-input orderStartText" type="text" placeholder="起始日" readOnly />
                            <span className="datepicker-toggle">
                                <span className="datepicker-toggle-button"></span>
                                <input type="date" className="datepicker-input orderStartDate" />
                            </span>
                            <span> ~ </span>
                            <input className="date-input orderEndText" type="text" placeholder="結束日" readOnly />
                            <span className="datepicker-toggle">
                                <span className="datepicker-toggle-button"></span>
                                <input type="date" className="datepicker-input orderEndDate" />
                            </span>
                            <button className="rounded-1">查詢</button>
                        </form>
                        <hr />
                        <div>
                            <form className="mb-3">
                                <label htmlFor="orderNumber">訂單查詢</label>
                                <input id="orderNumber" type="text" className="rounded-1" placeholder="請輸入訂單編號" />&ensp;<input
                                    type="submit" className="rounded-1" />
                            </form>
                            <table className="w-100 text-center">
                                <thead>
                                    <tr className="border-0">
                                        <th className="text-start">訂單編號</th>
                                        <th>訂單時間</th>
                                        <th>處理狀態</th>
                                        <th>物流</th>
                                        <th>訂單詳情</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-start">2024112200348</td>
                                        <td>2024/11/22</td>
                                        <td>待出貨</td>
                                        <td>宅配</td>
                                        <td><a href="">明細</a></td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">2024101000331</td>
                                        <td>2024/10/10</td>
                                        <td>已出貨</td>
                                        <td>7-11</td>
                                        <td><a href="">明細</a></td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">2024071800241</td>
                                        <td>2024/07/18</td>
                                        <td>已取貨</td>
                                        <td>宅配</td>
                                        <td><a href="">明細</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <!-- 6. 基本資料 --> */}
                    <div id="memberProfile" className="tab-pane profile-container">
                        {/* <!-- 頭像 --> */}
                        <div>
                            <div className="text-center">
                                <img src="http://localhost/gachoraLRB/public/images/gachoButton.png" alt="頭像"
                                    className="rounded-circle d-inline-block object-fit-contain" width="200px" height="200px" />
                                <button className="btn-icon m-auto d-block">更換頭像</button>
                            </div>
                        </div>
                        {/* <!-- 表單資料 --> */}
                        <div className="mt-5" id="profile">
                            <form>
                                {/* <!-- 姓名 --> */}
                                <div className="mb-3">
                                    <label className="form-label">姓名*</label>
                                    <input type="text" className="form-control-plaintext rounded-pill px-3" defaultValue={user.name} readOnly />
                                </div>

                                {/* <!-- 電子郵件 --> */}
                                <div className="mb-3">
                                    <label className="form-label">電子郵件*</label>
                                    <input type="mail" className="form-control-plaintext rounded-pill px-3"
                                        defaultValue={user.email} readOnly />
                                </div>

                                {/* <!-- 電話號碼 --> */}
                                <div className="mb-3">
                                    <label className="form-label">電話號碼</label>
                                    <input type="text" className="form-control-plaintext rounded-pill px-3" defaultValue={user.phone} readOnly />
                                </div>

                                {/* <!-- 生日 --> */}
                                <div className="mb-3">
                                    <label className="form-label">生日</label>
                                    <input type="text" className="form-control-plaintext rounded-pill px-3" defaultValue="-" readOnly />
                                    <span className="small-info">ℹ️ 設定後無法修改</span>
                                </div>

                                {/* <!-- 地址 --> */}
                                <div className="mb-3">
                                    <label className="form-label">地址</label>
                                    <input type="text" className="form-control-plaintext rounded-pill px-3" defaultValue="-" readOnly />
                                </div>

                                {/* <!-- 付款方式 --> */}
                                <div className="mb-3">
                                    <label className="form-label">付款方式</label>
                                    <input type="text" className="form-control-plaintext rounded-pill px-3" defaultValue="-" readOnly />
                                </div>

                                {/* <!-- 推薦碼 --> */}
                                <div className="mb-3">
                                    <label className="form-label">我的推薦碼</label>
                                    <input type="text" className="form-control-plaintext rounded-pill px-3" defaultValue="550481" readOnly />
                                </div>

                                {/* <!-- 修改按鈕 --> */}

                                <div className="edit-button text-end mt-4">
                                    <button type="button" className="btn rounded-pill" id="editProfile">修改基本資料</button>
                                </div>

                                <Link href={route('profile.edit')}>
                                    <div className="edit-button text-end mt-4">
                                        <button type="button" className="btn rounded-pill">修改基本資料LinkToPage</button>
                                    </div>
                                </Link>
                            </form>
                        </div>
                        {/* <!-- 修改表單資料 --> */}
                        <div className="mt-5 d-none" id="profileEdit">
                            <form>
                                {/* <!-- 姓名 --> */}
                                <div className="mb-3">
                                    <label className="form-label">姓名*</label>
                                    <input type="text" className="form-control-plaintext rounded-pill px-3 editFocus" defaultValue="陳寶寶" />
                                </div>

                                {/* <!-- 電子郵件 --> */}
                                <div className="mb-3">
                                    <label className="form-label">電子郵件*</label>
                                    <input type="mail" className="form-control-plaintext rounded-pill px-3"
                                        defaultValue="baobaoChen@gmail.com" readOnly />
                                </div>

                                {/* <!-- 電話號碼 --> */}
                                <div className="mb-3">
                                    <label className="form-label">電話號碼</label>
                                    <input type="text" className="form-control-plaintext rounded-pill px-3 editFocus" defaultValue="" />
                                </div>

                                {/* <!-- 生日 --> */}
                                <div className="mb-3">
                                    <label className="form-label">生日</label>
                                    <input type="text" className="form-control-plaintext rounded-pill px-3 editFocus" defaultValue="" />
                                    <span className="small-info">ℹ️ 設定後無法修改</span>
                                </div>

                                {/* <!-- 地址 --> */}
                                <div className="mb-3">
                                    <label className="form-label">地址</label>
                                    <input type="text" className="form-control-plaintext rounded-pill px-3 editFocus" defaultValue="" />
                                </div>

                                {/* <!-- 付款方式 --> */}
                                <div className="mb-3">
                                    <label className="form-label">付款方式</label>
                                    <input type="text" className="form-control-plaintext rounded-pill px-3 editFocus" defaultValue="" readOnly />
                                    <div className="edit-button text-end mt-2">
                                        <button type="button" className="btn rounded-pill btn-sm">刪除</button>
                                        <button type="button" className="btn rounded-pill btn-sm">新增</button>
                                    </div>
                                </div>

                                {/* <!-- 推薦碼 --> */}
                                <div className="mb-3">
                                    <label className="form-label">我的推薦碼</label>
                                    <input type="text" className="form-control-plaintext rounded-pill px-3" defaultValue="550481" readOnly />
                                </div>

                                {/* <!-- 修改按鈕 --> */}
                                <div className="edit-button text-end mt-4">
                                    <button type="button" className="btn rounded-pill" id="confirmEdit">確認修改</button>
                                </div>
                            </form>
                            <hr />
                            {/* <!-- 修改密碼 --> */}
                            <div className="edit-button text-end mt-4">
                                <button id="editPwdBtn" type="button" className="btn rounded-pill">修改密碼</button>
                            </div>
                            <form id="pwdSection" style={{ display: "none" }}>
                                <div className="mb-3">
                                    <label className="form-label">舊密碼*</label>
                                    <input type="password" className="form-control-plaintext rounded-pill px-3 editFocus" defaultValue="" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">新密碼*</label>
                                    <input type="password" className="form-control-plaintext rounded-pill px-3 editFocus" defaultValue="" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">確認密碼*</label>
                                    <input type="password" className="form-control-plaintext rounded-pill px-3 editFocus" defaultValue="" />
                                </div>
                                {/* <!-- 修改密碼按鈕 --> */}
                                <div className="edit-button text-end mt-4">
                                    <button id="confirmPwdBtn" type="button" className="btn rounded-pill">確認修改密碼</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

        </AuthenticatedLayout>
    );
}

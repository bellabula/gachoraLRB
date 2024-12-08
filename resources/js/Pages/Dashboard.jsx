import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <main class="container container-xxl">
                    <div class="row pt-5 pb-5 align-items-center">
                        <div class="col-8"><img src="./img/diamond.svg" alt="" width="50px" class="me-4" /><span class="h5">XXX會員
                            您好!</span></div>
                        <div class="col-4">
                            <p class="h2 d-inline-block">G幣餘額</p><button class="rounded-5 float-end">儲值G幣</button>
                            <div class="h2 text-end mb-0">XXXXXXXXX</div>
                            <div class="text-end w-100" style="color:gray">xxx G幣將在2025/12/31到期</div>
                        </div>
                    </div>
                    {/* <!-- Tabs --> */}
                    <div class="custom-section">
                        <ul class="nav nav-pills justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link active" href="#memberWall" data-bs-toggle="pill">戰利牆</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#memberFavor" data-bs-toggle="pill">收藏清單</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#memberStore" data-bs-toggle="pill">戰利儲藏庫</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#memberWallet" data-bs-toggle="pill">我的錢包</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#memberOrder" data-bs-toggle="pill">我的訂單</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#memberProfile" data-bs-toggle="pill">基本資料</a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content pt-5">
                        {/* <!-- 1. 戰利牆 --> */}
                        <div id="memberWall" class="tab-pane active">
                            <div class="container">
                                {/* <!-- 成就 --> */}
                                <div>
                                    <h2 class="text-center fw-bolder my-5">成就</h2>
                                    <div class="d-flex justify-content-between">
                                        <button class="btn"><img src="./img/arrowLeft.svg" /></button>
                                        <div class="d-flex gap-3 flex-wrap">
                                            <img src="./img/dodolong.png" class="circle-container" />
                                            <img src="./img/dodolong.png" class="circle-container" />
                                            <img src="./img/dodolong.png" class="circle-container" />
                                            <img src="./img/dodolong.png" class="circle-container" />
                                            <img src="./img/dodolong.png" class="circle-container" />
                                            <img src="./img/dodolong.png" class="circle-container" />
                                        </div>
                                        <button class="btn"><img src="./img/arrowRight.svg" /></button>
                                    </div>
                                </div>

                                {/* <!-- 抽獎獲利檔 --> */}
                                <div class="mt-4">
                                    <h2 class="text-center fw-bolder my-5">扭蛋戰利品</h2>
                                    <div class="d-flex justify-content-between" style="background-color: var(--main-darkblue);">
                                        <button class="btn"><img src="./img/arrowLeft.svg" /></button>
                                        <div class="d-flex gap-3 flex-wrap">
                                            <div>
                                                <img src="./img/gachoTop.svg" class="d-block" style="height:80px;position: relative;bottom: -20px;" />
                                                <img src="./img/dodolong.png" />
                                                <img src="./img/gachoBotton.svg" class="d-block" style="height:100px; object-fit: contain;" />
                                            </div>
                                            <div>
                                                <img src="./img/gachoTop.svg" class="d-block" style="height:80px;position: relative;bottom: -20px;" />
                                                <img src="./img/dodolong.png" />
                                                <img src="./img/gachoBotton.svg" class="d-block" style="height:100px; object-fit: contain;" />
                                            </div>
                                            <div>
                                                <img src="./img/gachoTop.svg" class="d-block" style="height:80px;position: relative;bottom: -20px;" />
                                                <img src="./img/dodolong.png" />
                                                <img src="./img/gachoBotton.svg" class="d-block" style="height:100px; object-fit: contain;" />
                                            </div>
                                            <div>
                                                <img src="./img/gachoTop.svg" class="d-block" style="height:80px;position: relative;bottom: -20px;" />
                                                <img src="./img/dodolong.png" />
                                                <img src="./img/gachoBotton.svg" class="d-block" style="height:100px; object-fit: contain;" />
                                            </div>
                                        </div>
                                        <button class="btn"><img src="./img/arrowRight.svg" /></button>
                                    </div>
                                </div>

                                {/* <!-- 一番賞獲利檔 --> */}
                                <div class="mt-4">
                                    <h2 class="text-center fw-bolder my-5">一番賞戰利品</h2>
                                    <div class="d-flex justify-content-between">
                                        <button class="btn"><img src="./img/arrowLeft.svg" /></button>
                                        <div class="d-flex gap-3 flex-wrap">
                                            <img src="./img/ichiban1.png" />
                                            <img src="./img/ichiban1.png" />
                                            <img src="./img/ichiban1.png" />
                                            <img src="./img/ichiban1.png" />
                                            <img src="./img/ichiban1.png" />
                                            <img src="./img/ichiban1.png" />
                                        </div>
                                        <button class="btn"><img src="./img/arrowRight.svg" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 2. 收藏清單 --> */}
                        <div id="memberFavor" class="tab-pane">
                            <div class="favor-section">
                                <ul class="nav nav-pills justify-content-center nav-justified">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#gachofavor" data-bs-toggle="pill">扭蛋收藏</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#ichibanfavor" data-bs-toggle="pill">一番賞收藏</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content pt-5">
                                <div id="gachofavor" class="tab-pane active">
                                    <div class="row  row-gap-2">
                                        <div class="col-3"><a href=""><img class="w-100" src="./img/gachoMachineA.png" alt="" /></a>
                                        </div>
                                        <div class="col-3"><a href=""><img class="w-100" src="./img/gachoMachineA.png" alt="" /></a>
                                        </div>
                                        <div class="col-3"><a href=""><img class="w-100" src="./img/gachoMachineA.png" alt="" /></a>
                                        </div>
                                        <div class="col-3"><a href=""><img class="w-100" src="./img/gachoMachineA.png" alt="" /></a>
                                        </div>
                                        <div class="col-3"><a href=""><img class="w-100" src="./img/gachoMachineA.png" alt="" /></a>
                                        </div>
                                        <div class="col-3"><a href=""><img class="w-100" src="./img/gachoMachineA.png" alt="" /></a>
                                        </div>
                                        <div class="col-3"><a href=""><img class="w-100" src="./img/gachoMachineA.png" alt="" /></a>
                                        </div>
                                        <div class="col-3"><a href=""><img class="w-100" src="./img/gachoMachineA.png" alt="" /></a>
                                        </div>
                                        <div class="col-3"><a href=""><img class="w-100" src="./img/gachoMachineA.png" alt="" /></a>
                                        </div>
                                        <div class="col-3"><a href=""><img class="w-100" src="./img/gachoMachineA.png" alt="" /></a>
                                        </div>
                                        <div class="col-3"><a href=""><img class="w-100" src="./img/gachoMachineA.png" alt="" /></a>
                                        </div>
                                        <div class="col-3"><a href=""><img class="w-100" src="./img/gachoMachineA.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div id="ichibanfavor" class="tab-pane">
                                    <h1>一番賞收藏</h1>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 3. 戰利儲藏庫 --> */}
                        <div id="memberStore" class="tab-pane">
                            <h1>戰利儲藏庫</h1>
                            <div class="container my-5">
                                <div class="inventory-container">
                                    <table class="w-100 text-center">
                                        <tr class="border-0">
                                            <th class="text-start">商品圖片</th>
                                            <th class="text-start">商品名稱</th>
                                            <th>賞別</th>
                                            <th>系列</th>
                                            <th>擁有數量</th>
                                            <th>抽扭日期</th>
                                            <th>選取數量</th>
                                            <th>兌換G幣</th>
                                            <th class="position-relative">
                                                <div class="d-flex align-items-center justify-content-center">
                                                    幫我出貨
                                                    <button class="position-absolute classFilterBtn"
                                                        style="border-radius: 5px; right: -15px;">+</button>
                                                    <div class="position-absolute classFilter"
                                                        style="visibility: hidden; padding: 5px;text-align: left;border: 1px solid var(--main-darkblue); border-radius: 5px; background-color: var(--main-bg-gray); color: black; right:-130px; bottom: -150px;">
                                                        <form action="">
                                                            <input type="checkbox" checked /> 商品圖片 <br />
                                                            <input type="checkbox" checked /> 商品名稱 <br />
                                                            <input type="checkbox" checked /> 賞別 <br />
                                                            <input type="checkbox" checked /> 系列 <br />
                                                            <input type="checkbox" checked /> 抽/扭日期 <br />
                                                            <input type="checkbox" checked /> 用有數量 <br />
                                                        </form>
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td class="text-start">
                                                <span>1.</span>
                                                <img src="" alt="商品圖片" />
                                            </td>
                                            <td class="text-start">龍貓等公車xczczxcxz</td>
                                            <td>A獎</td>
                                            <td>宮崎駿001</td>
                                            <td>3</td>
                                            <td>2024/01/03<br />2024/05/10<br />2024/10/15</td>
                                            <td>
                                                <div class="d-flex align-items-center justify-content-center">
                                                    <button class="btn btn-secondary btn-circle btn-decrease">-</button>
                                                    <input type="text" value="0" class="form-control mx-2 text-center"
                                                        style="width: 50px;" readonly />
                                                    <button class="btn btn-secondary btn-circle btn-increase">+</button>
                                                </div>
                                            </td>
                                            <td width="100px">
                                                <button class="btn btn-exchange">兌換G幣</button>
                                            </td>
                                            <td width="100px">
                                                <button class="btn btn-deli">幫我出貨</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-start">
                                                <span>2.</span>
                                                <img src="" alt="商品圖片" />
                                            </td>
                                            <td class="text-start">龍貓等公車</td>
                                            <td>A獎</td>
                                            <td>宮崎駿001</td>
                                            <td>1</td>
                                            <td>2024/11/12</td>
                                            <td>
                                                <div class="d-flex align-items-center justify-content-center">
                                                    <button class="btn btn-secondary btn-circle btn-decrease">-</button>
                                                    <input type="text" value="0" class="form-control mx-2 text-center"
                                                        style="width: 50px;" readonly />
                                                    <button class="btn btn-secondary btn-circle btn-increase">+</button>
                                                </div>
                                            </td>
                                            <td width="100px">
                                                <button class="btn btn-exchange">兌換G幣</button>
                                            </td>
                                            <td width="100px">
                                                <button class="btn btn-deli">幫我出貨</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-start">
                                                <span>3.</span>
                                                <img src="" alt="商品圖片" />
                                            </td>
                                            <td class="text-start">龍貓等公車</td>
                                            <td>A獎</td>
                                            <td>宮崎駿001</td>
                                            <td>5</td>
                                            <td>2024/11/15<br />2024/11/15<br />2024/11/15<br />2024/11/22<br />2024/12/05</td>
                                            <td>
                                                <div class="d-flex align-items-center justify-content-center">
                                                    <button class="btn btn-secondary btn-circle btn-decrease">-</button>
                                                    <input type="text" value="0" class="form-control mx-2 text-center"
                                                        style="width: 50px;" readonly />
                                                    <button class="btn btn-secondary btn-circle btn-increase">+</button>
                                                </div>
                                            </td>
                                            <td width="100px">
                                                <button class="btn btn-exchange">兌換G幣</button>
                                            </td>
                                            <td width="100px">
                                                <button class="btn btn-deli">幫我出貨</button>
                                            </td>
                                        </tr>
                                        {/* <!-- Add more rows as needed --> */}
                                    </table>
                                </div>
                                <p class="note mt-4">
                                    商品取貨規則：
                                    <ul>
                                        <li>單筆寄送僅接受一次選擇。</li>
                                        <li>以超商寄取，單筆記錄依 7-11 寄付規定。</li>
                                        <li>若商品在聯絡時間3個月後仍未處理，則會「自動兌換成對應G幣」。</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        {/* <!-- 4. 我的錢包 --> */}
                        <div id="memberWallet" class="tab-pane">
                            <p class="h1 d-inline-block me-3">G幣交易紀錄</p>
                            <form class="d-inline-block">
                                <input class="date-input orderStartText" type="text" placeholder="起始日" readonly />
                                <span class="datepicker-toggle">
                                    <span class="datepicker-toggle-button"></span>
                                    <input type="date" class="datepicker-input orderStartDate" />
                                </span>
                                <span> ~ </span>
                                <input class="date-input orderEndText" type="text" placeholder="結束日" readonly />
                                <span class="datepicker-toggle">
                                    <span class="datepicker-toggle-button"></span>
                                    <input type="date" class="datepicker-input orderEndDate" />
                                </span>
                                <button class="rounded-1">查詢</button>
                            </form>
                            <hr />
                            <div>
                                <table class="w-100 text-center">
                                    <tr class="text-center border-0">
                                        <th class="text-start">交易日期</th>
                                        <th>物品</th>
                                        <th class="position-relative">
                                            <div class="d-flex align-items-center justify-content-center">
                                                類型 &ensp;
                                                <button class="itemFilterBtn">⋯</button>
                                            </div>
                                            <div class="position-absolute itemFilter"
                                                style="visibility: hidden; padding: 5px;text-align: left;border: 1px solid var(--main-darkblue); border-radius: 5px; background-color: var(--main-darkblue); color: white; right:-50px; bottom: -110px;">
                                                <form action="">
                                                    <input type="checkbox" checked /> 扭蛋 <br />
                                                    <input type="checkbox" checked /> 一番賞 <br />
                                                    <input type="checkbox" checked /> 訂單 <br />
                                                    <input type="checkbox" checked /> 生日禮 <br />
                                                </form>
                                            </div>
                                        </th>
                                        <th>數量</th>
                                        <th>總計</th>
                                        <th class="position-relative">
                                            <div class="d-flex align-items-center justify-content-center">
                                                付款方式 &ensp;
                                                <button class="itemFilterBtn">⋯</button>
                                            </div>
                                            <div class="position-absolute itemFilter"
                                                style="visibility: hidden; padding: 5px;text-align: left;border: 1px solid var(--main-darkblue); border-radius: 5px; background-color: var(--main-darkblue); color: white; right:-50px; bottom: -110px;">
                                                <form action="">
                                                    <input type="checkbox" checked /> G 幣 <br />
                                                    <input type="checkbox" checked /> 信用卡 <br />
                                                    <input type="checkbox" checked /> 轉帳 <br />
                                                    <input type="checkbox" checked /> 超商付款 <br />
                                                </form>
                                            </div>
                                        </th>
                                        <th>G 幣變更</th>
                                        <th class="position-relative">
                                            <div class="d-flex align-items-center justify-content-center">
                                                G 幣餘額
                                                <button class="position-absolute classFilterBtn"
                                                    style="border-radius: 5px; right: -15px;">+</button>
                                            </div>
                                            <div class="position-absolute classFilter"
                                                style="visibility: hidden; padding: 5px;text-align: left;border: 1px solid var(--main-darkblue); border-radius: 5px; background-color: var(--main-darkblue); color: white; right:-130px; bottom: -190px;">
                                                <form action="">
                                                    <input type="checkbox" checked /> 交易日期 <br />
                                                    <input type="checkbox" checked /> 物品 <br />
                                                    <input type="checkbox" checked /> 類型 <br />
                                                    <input type="checkbox" checked /> 數量 <br />
                                                    <input type="checkbox" checked /> 總計 <br />
                                                    <input type="checkbox" checked /> 付款方式 <br />
                                                    <input type="checkbox" checked /> G幣變更 <br />
                                                    <input type="checkbox" checked /> G幣餘額 <br />
                                                </form>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td class="text-start">2024/11/20</td>
                                        <td>XXX扭蛋</td>
                                        <td>扭蛋</td>
                                        <td>10</td>
                                        <td>G 1,200</td>
                                        <td>G 幣</td>
                                        <td>-G 1200</td>
                                        <td>G 1,650</td>
                                    </tr>
                                    <tr>
                                        <td class="text-start">2024/11/20</td>
                                        <td>XXX扭蛋</td>
                                        <td>扭蛋</td>
                                        <td>10</td>
                                        <td>G 1,200</td>
                                        <td>G 幣</td>
                                        <td>-G 1200</td>
                                        <td>G 1,650</td>
                                    </tr>
                                    <tr>
                                        <td class="text-start">2024/11/20</td>
                                        <td>XXX扭蛋</td>
                                        <td>扭蛋</td>
                                        <td>10</td>
                                        <td>G 1,200</td>
                                        <td>G 幣</td>
                                        <td>-G 1200</td>
                                        <td>G 1,650</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        {/* <!-- 5. 我的訂單 --> */}
                        <div id="memberOrder" class="tab-pane">
                            <p class="h1 d-inline-block me-3">我的訂單</p>
                            <form class="d-inline-block">
                                <input class="date-input orderStartText" type="text" placeholder="起始日" readonly />
                                <span class="datepicker-toggle">
                                    <span class="datepicker-toggle-button"></span>
                                    <input type="date" class="datepicker-input orderStartDate" />
                                </span>
                                <span> ~ </span>
                                <input class="date-input orderEndText" type="text" placeholder="結束日" readonly />
                                <span class="datepicker-toggle">
                                    <span class="datepicker-toggle-button"></span>
                                    <input type="date" class="datepicker-input orderEndDate" />
                                </span>
                                <button class="rounded-1">查詢</button>
                            </form>
                            <hr/>
                                <div>
                                    <form class="mb-3">
                                        <label for="orderNumber">訂單查詢</label>
                                        <input id="orderNumber" type="text" class="rounded-1" placeholder="請輸入訂單編號" />&ensp;<input
                                            type="submit" class="rounded-1" />
                                    </form>
                                    <table class="w-100 text-center">
                                        <tr class="border-0">
                                            <th class="text-start">訂單編號</th>
                                            <th>訂單時間</th>
                                            <th>處理狀態</th>
                                            <th>物流</th>
                                            <th>訂單詳情</th>
                                        </tr>
                                        <tr>
                                            <td class="text-start">2024112200348</td>
                                            <td>2024/11/22</td>
                                            <td>待出貨</td>
                                            <td>宅配</td>
                                            <td><a href="">明細</a></td>
                                        </tr>
                                        <tr>
                                            <td class="text-start">2024101000331</td>
                                            <td>2024/10/10</td>
                                            <td>已出貨</td>
                                            <td>7-11</td>
                                            <td><a href="">明細</a></td>
                                        </tr>
                                        <tr>
                                            <td class="text-start">2024071800241</td>
                                            <td>2024/07/18</td>
                                            <td>已取貨</td>
                                            <td>宅配</td>
                                            <td><a href="">明細</a></td>
                                        </tr>
                                    </table>
                                </div>
                        </div>
                        {/* <!-- 6. 基本資料 --> */}
                        <div id="memberProfile" class="tab-pane profile-container">
                            {/* <!-- 頭像 --> */}
                            <div>
                                <div class="text-center">
                                    <img src="./img/gachoButton.png" alt="頭像"
                                        class="rounded-circle d-inline-block object-fit-contain" width="200px" height="200px"/>
                                        <button class="btn-icon m-auto d-block">更換頭像</button>
                                </div>
                            </div>
                            {/* <!-- 表單資料 --> */}
                            <div class="mt-5" id="profile">
                                <form>
                                    {/* <!-- 姓名 --> */}
                                    <div class="mb-3">
                                        <label class="form-label">姓名*</label>
                                        <input type="text" class="form-control-plaintext rounded-pill px-3" value="陳寶寶" readonly/>
                                    </div>

                                    {/* <!-- 電子郵件 --> */}
                                    <div class="mb-3">
                                        <label class="form-label">電子郵件*</label>
                                        <input type="mail" class="form-control-plaintext rounded-pill px-3"
                                            value="baobaoChen@gmail.com" readonly/>
                                    </div>

                                    {/* <!-- 電話號碼 --> */}
                                    <div class="mb-3">
                                        <label class="form-label">電話號碼</label>
                                        <input type="text" class="form-control-plaintext rounded-pill px-3" value="-" readonly/>
                                    </div>

                                    {/* <!-- 生日 --> */}
                                    <div class="mb-3">
                                        <label class="form-label">生日</label>
                                        <input type="text" class="form-control-plaintext rounded-pill px-3" value="-" readonly/>
                                            <span class="small-info">ℹ️ 設定後無法修改</span>
                                    </div>

                                    {/* <!-- 地址 --> */}
                                    <div class="mb-3">
                                        <label class="form-label">地址</label>
                                        <input type="text" class="form-control-plaintext rounded-pill px-3" value="-" readonly/>
                                    </div>

                                    {/* <!-- 付款方式 --> */}
                                    <div class="mb-3">
                                        <label class="form-label">付款方式</label>
                                        <input type="text" class="form-control-plaintext rounded-pill px-3" value="-" readonly/>
                                    </div>

                                    {/* <!-- 推薦碼 --> */}
                                    <div class="mb-3">
                                        <label class="form-label">我的推薦碼</label>
                                        <input type="text" class="form-control-plaintext rounded-pill px-3" value="550481" readonly/>
                                    </div>

                                    {/* <!-- 修改按鈕 --> */}
                                    <div class="edit-button text-end mt-4">
                                        <button type="button" class="btn rounded-pill" id="editProfile">修改基本資料</button>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- 修改表單資料 --> */}
                            <div class="mt-5 d-none" id="profileEdit">
                                <form>
                                    {/* <!-- 姓名 --> */}
                                    <div class="mb-3">
                                        <label class="form-label">姓名*</label>
                                        <input type="text" class="form-control-plaintext rounded-pill px-3 editFocus" value="陳寶寶"/>
                                    </div>

                                    {/* <!-- 電子郵件 --> */}
                                    <div class="mb-3">
                                        <label class="form-label">電子郵件*</label>
                                        <input type="mail" class="form-control-plaintext rounded-pill px-3"
                                            value="baobaoChen@gmail.com" readonly/>
                                    </div>

                                    {/* <!-- 電話號碼 --> */}
                                    <div class="mb-3">
                                        <label class="form-label">電話號碼</label>
                                        <input type="text" class="form-control-plaintext rounded-pill px-3 editFocus" value=""/>
                                    </div>

                                    {/* <!-- 生日 --> */}
                                    <div class="mb-3">
                                        <label class="form-label">生日</label>
                                        <input type="text" class="form-control-plaintext rounded-pill px-3 editFocus" value=""/>
                                            <span class="small-info">ℹ️ 設定後無法修改</span>
                                    </div>

                                    {/* <!-- 地址 --> */}
                                    <div class="mb-3">
                                        <label class="form-label">地址</label>
                                        <input type="text" class="form-control-plaintext rounded-pill px-3 editFocus" value=""/>
                                    </div>

                                    {/* <!-- 付款方式 --> */}
                                    <div class="mb-3">
                                        <label class="form-label">付款方式</label>
                                        <input type="text" class="form-control-plaintext rounded-pill px-3 editFocus" value="" readonly/>
                                            <div class="edit-button text-end mt-2">
                                                <button type="button" class="btn rounded-pill btn-sm">刪除</button>
                                                <button type="button" class="btn rounded-pill btn-sm">新增</button>
                                            </div>
                                    </div>

                                    {/* <!-- 推薦碼 --> */}
                                    <div class="mb-3">
                                        <label class="form-label">我的推薦碼</label>
                                        <input type="text" class="form-control-plaintext rounded-pill px-3" value="550481" readonly/>
                                    </div>

                                    {/* <!-- 修改按鈕 --> */}
                                    <div class="edit-button text-end mt-4">
                                        <button type="button" class="btn rounded-pill" id="confirmEdit">確認修改</button>
                                    </div>
                                </form>
                                <hr/>
                                    {/* <!-- 修改密碼 --> */}
                                    <div class="edit-button text-end mt-4">
                                        <button id="editPwdBtn" type="button" class="btn rounded-pill">修改密碼</button>
                                    </div>
                                    <form id="pwdSection" style="display: none;">
                                        <div class="mb-3">
                                            <label class="form-label">舊密碼*</label>
                                            <input type="password" class="form-control-plaintext rounded-pill px-3 editFocus" value=""/>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">新密碼*</label>
                                            <input type="password" class="form-control-plaintext rounded-pill px-3 editFocus" value=""/>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">確認密碼*</label>
                                            <input type="password" class="form-control-plaintext rounded-pill px-3 editFocus" value=""/>
                                        </div>
                                        {/* <!-- 修改密碼按鈕 --> */}
                                        <div class="edit-button text-end mt-4">
                                            <button id="confirmPwdBtn" type="button" class="btn rounded-pill">確認修改密碼</button>
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </main>
            }
        >
            <Head title="Member" />

        </AuthenticatedLayout>
    );
}

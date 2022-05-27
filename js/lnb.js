document.write(`
    <div class="lnb">
        <div class="lnb__menu">
            <input type="radio" id="lnb__menuBtn01" name="lnb__menuBtn" />
            <label for="lnb__menuBtn01">RFID</label>
            <ul>
                <li><a href="./sub_02_Industry_03.html#rfid__transponder">트랜스폰더</a></li>
                <li><a href="./sub_02_Industry_03.html#rfid__reader">리더기</a></li>
                <li><a href="./sub_02_Industry_03.html#rfid__antenna">안테나</a></li>
            </ul>
            <input type="radio" id="lnb__menuBtn02" name="lnb__menuBtn" />
            <label for="lnb__menuBtn02">마그네틱</label>
            <ul>
                <li><a href="./sub_02_Industry_02.html#magnet__gripper">그리퍼</a></li>
                <li><a href="./sub_02_Industry_02.html#magnet__filter">필터</a></li>
            </ul>
            <input type="radio" id="lnb__menuBtn03" name="lnb__menuBtn" />
            <label for="lnb__menuBtn03">수중 장비</label>
            <ul>
                <li><a href="./sub_02_Industry_01.html#underwater__connector">수밀 커넥터</a></li>
                <li><a href="./sub_02_Industry_01.html#underwater__sonar">소나</a></li>
                <li><a href="./sub_02_Industry_01.html#underwater__rov">ROV</a></li>
            </ul>
        </div>
    </div>
    <script src="./js/underwaterSelect.js"></script>
`);

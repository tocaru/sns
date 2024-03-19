$(function () {

    const token = "Idru5rMfCdLfRaQc4Dx7";


    // 문의사항 등록을 위한 코드 (사이드바)
    $("body").on("click", "#sidbtn", function (e) {
        e.preventDefault();

        var business_name = $("#business_name").val();
        var client_name = $("#client_name").val();
        var service = $("#service").val();
        var phone_number = $("#phone_number").val();
        var budget = $("#budget").val();
        var is_agreed_privacy_agreement = $("input[name=is_agreed_privacy_agreement]:checked").val();

        if(business_name == "") {
            alert("회사명을 입력해주세요.");
            return;
        }

        if(client_name == "") {
            alert("담당자 이름을 입력해주세요.");
            return;
        }

        if(service == "") {
            alert("서비스를 선택해주세요.");
            return;
        }

        if(phone_number == "") {
            alert("전화번호를 입력해주세요.");
            return;
        }

        if(budget == "") {
            alert("예산을 입력해주세요.");
            return;
        }

        if(is_agreed_privacy_agreement == "F") {
            alert("개인정보 수집 및 이용에 동의해주세요.");
            return;
        }

        var domain = 'https://..';
        var marketer = '';
        var service_method = '광고대행';
        var budget_ratio = '';


        $.ajax({
            type: "POST",
            url: "https://www.mig-groupware.com/api/inquiry",
            data: {
                token: token,
                business_name: business_name,
                domain: domain,
                client_name: client_name,
                phone_number: phone_number,
                service: service,
                service_method: service_method,
                budget: budget,
                budget_ratio: budget_ratio,
                marketer: marketer,
            },
            dataType: 'JSON',
            success: function success(data) {
                alert('상담신청이 정상적으로 접수되었습니다. 광고전문가가 빠른 시간 안에 연락드리겠습니다.');
                window.location.reload();
            },
            error: function (response) {
                console.log(response);
            }
        });
    });

    // 문의사항 등록을 위한 코드 (메인페이지)
    $("body").on("click", "#inquiry_button", function (e) {
        e.preventDefault();

        var business_name = $("#business_name_index").val();
        var domain = $("#domain_index").val();
        var client_name = $("#client_name_index").val();
        var phone_number = $("#phone_number_index").val();
        var budget = $("#budget_index").val();
        var service_method = $("#service_method_index").val();
        var marketer = $("#marketer_index").val();
        

        
        if(business_name == "") {
            alert("회사명을 입력해주세요.");
            return;
        }

        if(client_name == "") {
            alert("이름을 입력해주세요.");
            return;
        }

        if(phone_number == "") {
            alert("전화번호를 입력해주세요.");
            return;
        }

        if(service_method == "") {
            alert("직접운영/대행사운영 중 현재상태를 입력해주세요.");
            return;
        }

        if ($("input:checkbox[id=agreement_check]").is(":checked") == false) {
            alert("개인정보 수집 및 이용에 동의해주세요.");
            return;
        }

        var service = '광고 문의';
        var budget_ratio = '';


        $.ajax({
            type: "POST",
            url: "https://www.mig-groupware.com/api/inquiry",
            data: {
                token: token,
                business_name: business_name,
                domain: domain,
                client_name: client_name,
                phone_number: phone_number,
                service: service,
                service_method: service_method,
                budget: budget,
                budget_ratio: budget_ratio,
                marketer: marketer,
            },
            dataType: 'JSON',
            success: function success(data) {
                alert('상담신청이 정상적으로 접수되었습니다. 광고전문가가 빠른 시간 안에 연락드리겠습니다.');
                window.location.reload();
            },
            error: function (response) {
                console.log(response);
            }
        });
    });

    // check if "ID=portfolio_area" exists
    if ($("#portfolio_area").length) {

        $("#portfolio_area").html("");
        $.ajax({
            type: "POST",
            url: "https://www.mig-groupware.com/api/portfolio",
            data: {
                token: token,
            },
            dataType: 'JSON',
            success: function success(data) {
                console.log(data.data);
                
                for(var i = 0; i < data.data.portfolios.length; i++) {
                    $("#portfolio_area").append(`
                        <li class="content_box">
                            <a href="#" onclick="openPopup()">
                            <figure>
                                <img src="https://www.mig-groupware.com/storage/portfolio/logo_path/100/${data.data.portfolios[i].logo_path}" alt="${data.data.portfolios[i].logo_path}"  style="width: 95%; height: 80%;"/>
                            </figure>
                            <div class="txt">
                                <h3>${data.data.portfolios[i].title}</h3>
                            </div>
                            </a>
                        </li>
                    `);
                    // 위의 경로에서 logo_path/100/을 변경하면 다른 사이즈의 이미지를 불러올 수 있습니다. 100, 400, 800 가능.
                }
            },
            error: function (response) {
                console.log(response);
            }
        });

    }

});
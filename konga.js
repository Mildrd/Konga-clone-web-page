$('document').ready(function () {
   /* $('#counterTable').click(function (event) {
       console.log(event.target)
    })*/
    //declaring variables
    let counternum = 0
    $("#increase, #increasecart").click(function () {
			//console.log(counternum++); //check if this is working
			counternum++;
			$("#num, #numcart").html(counternum);
		});
    $("#decrease, #decreasecart").click(function () {
			//console.log(counternum++); //check if this is working
			if (counternum >= 1) {
				counternum--;
				$("#num").html(counternum);
			}
		});
    /*$('.box-4').click((event) => {
        console.log(event.target);
    })*/
    $("#save").click(() => {
			let box = document.createElement("div");
			box.classList.add("log");
			let boxinner = document.createElement("div");
			let btnclose = document.createElement("button");
			btnclose.classList.add("closebox");
			let par = document.createElement("p");
			let login = document.createElement("a");
			login.setAttribute("href", "#");
			btnclose.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
			par.innerHTML = "You need to be logged in to Save an Item";
			login.innerHTML = "click here to login";
			boxinner.append(par);
			boxinner.append(login);
			box.append(boxinner);
			box.append(btnclose);
        $("main").prepend(box);
      
			$(".log").animate({ left: "100px" });
			$(".closebox").click(function () {
                $(".closebox").parentsUntil('main').remove()
			});
		});
    $('#phoneNum').click(function(){
        $('#phoneNum').hide();
        $('#number').show()
    })
     $("#number").click(function () {
				$("#phoneNum").show();
				$("#number").hide();
			});

    $('#myCart').click(() => {
         if (counternum == 0) {
               $("main").hide();
             $(".cart-empty").show();
             $(".cart-container").hide();
             
         } else if (counternum > 0) {
             $(".cart-empty").hide();
             $("main").hide();
             $(".cart-container").show();
					}
       
    })
    $('.buyNow').click(() => {
        $('#cartNum').html(counternum)
        let img = $(".product-img").html()
        let prdttxt = $('.box-1 h3').html()
        let productprice = $('#product-price').html()
        let totalprice =
					counternum * productprice.slice(1, productprice.length);
        console.log(productprice.slice(1, productprice.length));
      ;
        renderCartTable(img, prdttxt,totalprice)
        
       
    })
    function renderCartTable (x, y, z) {
        let productprice = $('#product-price').text();
    
	let htmlcart = `<tr class="item-data">
							<td class="prdt-img">${x} ${y}</td>
							<td>
								<table border="1" id="counterTable"  style="margin: auto;">
									<tr>
										<td>
											<i
												class="fa fa-minus"
												aria-hidden="true"
												id="decreasecart"
											></i>
										</td>
										<td id="numcart">0</td>
										<td>
											<i
												class="fa fa-plus"
												aria-hidden="true"
												id="increasecart"
											></i>
										</td>
									</tr>
								</table>
							</td>
							<td>₦${z} ${productprice} x ${counternum}items</td>
							<td>
							
							</td>
						</tr>`;
        $(".cart-details").append(htmlcart);
}


   
    })
    
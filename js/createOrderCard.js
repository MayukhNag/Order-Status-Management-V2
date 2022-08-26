const createOrderCard = (orderId)=>{
    
    let orderCardsWrapper = document.getElementById('order-cards-wrapper')

    let colDiv = document.createElement('div')
    let cardDiv = document.createElement('div')
    let cardHeader = document.createElement('div')
    let cancelBtn = document.createElement('i')
    let cardBody = document.createElement('div')
    let cardText1=document.createElement('p')
    let cardText2=document.createElement('p')
    let cardText3=document.createElement('p')
    let statusBadge=document.createElement('span')
    let cardFooter=document.createElement('div')


    colDiv.classList='col-md-3 order-status-card'
    cardDiv.classList='card text-center'
    cardHeader.classList='card-header'
    cancelBtn.classList='fa-solid fa-xmark cancel-btn'
    cardBody.classList='card-body'
    cardText1.classList='card-text'
    cardText2.classList='card-text'
    cardText3.classList='card-text'
    statusBadge.classList='badge rounded-pill bg-success'
    cardFooter.classList='card-footer'



    cardHeader.innerHTML=`<span>Order Id: <b>${orderId}</b></span>`
    cardText1.innerText='Medium Size Pizza - 2 Nos'
    cardText2.innerHTML='Bill Amount: <b>$22</b>'
    statusBadge.innerText='First layer of cheese added'
    cardFooter.innerText= new Date().toLocaleDateString("en-US",{
        year: 'numeric',
         month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: "2-digit",
          second: "2-digit" })    //'18-08-2022 10:24PM'
    
    statusBadge.id=orderId
    
    cardHeader.appendChild(cancelBtn)
    cardDiv.appendChild(cardHeader)
    cardBody.appendChild(cardText1)
    cardBody.appendChild(cardText2)
    cardBody.appendChild(cardText3)
    cardText3.appendChild(statusBadge)
    cardDiv.appendChild(cardBody)
    cardDiv.appendChild(cardFooter)
    colDiv.appendChild(cardDiv)
    orderCardsWrapper.appendChild(colDiv)

    cancelBtn.addEventListener('click', () => {
        colDiv.style.display='none'
    })
}






/* <div class="col-md-3 order-status-card"><div class="card text-center"><div 
          class="card-header"><span>Order Id: <b>qwerty12345</b></span>
          <i class="fa-solid fa-xmark"></i>
        </div><div class="card-body"><p
             class="card-text">Medium Size Pizza - 2 Nos</p>
             
            <p class="card-text">Bill Amount: <b>$22</b></p>
            <p class="card-text"><span class="badge ro unded-pill bg-success" id="qwerty12345">Package recieved at counter</span></p></div>
            <div class="card-footer">August 26, 2022 at 05:37:13 PM</div></div></div>  */
const chefReceived = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText='Chef received '

        resolve(orderId)
      }, 2000)
    })
  }
  
  const pizzaSauceAdded = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText='Pizza Sauce added'

        resolve(orderId)
      }, 10000)
    })
  }
  
  const firstLayerOfCheezeAdded = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText='First layer of cheese added '

        resolve(orderId)
      }, 5000)
    })
  }
  
  const toppingsAdded = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText='Topings added'

        resolve(orderId)
      }, 12000)
    })
  }
  
  const secondLayerOfCheezeAdded = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText='Second layer of cheese added'

        resolve(orderId)
      }, 5000)
    })
  }
  
  const pizzaBaked = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText='Pizza baked'

        resolve(orderId)
      }, 15000)
    })
  }
  
  const oreganoAddedAndPacked = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText='Oregano added and packed '

        resolve(orderId)
      }, 8000)
    })
  }
  
  const packageReceivedAtCounter = (orderId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderId).innerText='Package recieved at counter'

        resolve()
      }, 2000)
    })
  
} 
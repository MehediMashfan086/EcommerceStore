var updateBtns = document.getElementsByClassName('update-cart')

for (i = 0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
		var action = this.dataset.action
		console.log('productId:', productId, 'action:', action)
        console.log('USER:', user)

        if (user == 'AnonymousUser'){
			console.log('Not Logged in')
		}else{
			updateUserOrder(productId, action)
		}
    })
}

function updateUserOrder(productId, action){
	console.log('User is Logged in, sending data..')

	var url = '/update_item/'
	fetch(url, {
		method: 'POST',
		headers:{
			'Content-Type': 'applications/json'
		},
		body: {'productId': productId, 'action': action}
	})
}
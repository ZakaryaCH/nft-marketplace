const chatManagement = {
    filters: {
        name: ''
    },
    data: {
        users: [
            {
                id: "15lksdjk78",
                name: "Joe Doe",
                status: "Online",
                profileUrl: "https://images.wallpaperscraft.com/image/single/soldier_helmet_art_123765_240x320.jpg"
            },
            {
                id: "klasdjl125",
                name: "Sauron",
                status: "Online",
                profileUrl: "https://images.wallpaperscraft.com/image/single/girl_musician_guitar_149459_240x320.jpg"
            }
        ],
        openedChats: [
            {
                id: "15lksdjk78",
                messages: [
                    {
                        id: "ljasd1245",
                        timestamp: Date.now(),
                        type: 2,
                        message: "Hello, how you doing today man?"
                    },
                    {
                        id: "ojlg21356",
                        timestamp: Date.now(),
                        type: 1,
                        message: "Hello, how you doing today man?"
                    },
                    {
                        id: "posadjkl78",
                        timestamp: Date.now(),
                        type: 1,
                        message: "Hello, how you doing today man?"
                    }

                ]
            },
            {
                id: "klasdjl125",
                messages: [
                    {
                        id: "ljasd1245",
                        timestamp: Date.now(),
                        type: 2,
                        message: "Lorem ipsum dolor sit amet et semper"
                    },
                    {
                        id: "ojlg21356",
                        timestamp: Date.now(),
                        type: 1,
                        message: "Lorem ipsum dolor sit amet et semper"
                    },
                    {
                        id: "posadjkl78",
                        timestamp: Date.now(),
                        type: 1,
                        message: "Lorem ipsum dolor sit amet et semper"
                    }

                ]
            }
        ],
        messageHistory: [
            {
                id: "15lksdjk78",
                message: "This is a test message that is used purely for testing a a a a ",
                read: false
            },
            {
                id: "15lksdjk78",
                message: "This is a test message that is used purely for testing",
                read: false
            },
            {
                id: "15lksdjk78",
                message: "This is a test message that is used purely for testing",
                read: true
            },
            {
                id: "15lksdjk78",
                message: "This is a test message that is used purely for testing",
                read: false
            },
            {
                id: "15lksdjk78",
                message: "This is a test message that is used purely for testing",
                read: false
            },
            {
                id: "15lksdjk78",
                message: "This is a test message that is used purely for testing",
                read: false
            },
            {
                id: "15lksdjk78",
                message: "This is a test message that is used purely for testing",
                read: false
            },
            
        ]
    },

    getData(){
        return this.data
    },

    setFilter(type, val){
        this.filters[type] = val
    },

    getUser(id){
        let temp = false
        this.data.users.map(user => {
            if(user.id === id){
                temp = user
            }
        })
        return temp
    },

    sendMessage(id, message){
        this.data.openedChats.map(chat => {
            if(chat.id === id){
                chat.messages.push({
                    id: "kbghnlfai12",
                    timestamp: Date.now(),
                    type: 2,
                    message: message
                })
                this.renderChatMessages(id)
            }
        })
    },

    renderMainChat(){
        let chat_content = document.querySelector(".chat-content")
        let tempTemplate = `
        <div class="message-search row align-center  justify-between">
            <input type="text" placeholder="Enter Name" name="message-search" id="message-name-search">
            <img src="./public/images/icons/search.png" alt="">
        </div>
        <div class="messages-overflow">
            <div class="all-messages">

            </div>
        </div>
        `

        document.querySelector(".chat-head-info").innerHTML = `
            <img src="./public/images/icons/logo.png" alt="" class='profile-img'>
            <p>Brand Name</p>
        `

        chat_content.innerHTML = tempTemplate

        let header_template = `
            <div class="chat-head-info row align-center">
                <img src="./public/images/icons/logo.png" class="profile-img" />
                <p>Brand Name</p>
            </div>

            <img src="./public/images/icons/close.png" alt="" class="chat-close">
        `

        document.querySelector(".chat-head").innerHTML = header_template

        document.querySelector("#message-name-search").addEventListener("input", (e) => {
            chatManagement.setFilter("name",e.target.value)
            console.log(e.target.value)
            chatManagement.renderMessageHistory()
        })

        document.querySelector(".chat-close").addEventListener("click", () => {
            chatManagement.renderMainChat()
            chatManagement.renderMessageHistory()
            document.querySelector(".chat-window").classList.remove("chat-window-show")
            
        })
    },

    renderActiveChat(id){
        let chat_content = document.querySelector(".chat-content")
        let user = this.getUser(id)

        chat_content.innerHTML = `
        <div>
            <div class='messages-overflow'>
                <div class='chat-messages'>
                </div>
            </div>
            <div class="message-write row align-center  justify-between">
                <input type="text" name="message" id="new-message-text" placeholder="Message Text" --data-chat-id='${id}' />
                <img src="./public/images/icons/send.png" id='new-message-send' />
            </div>
        </div>
        `

        let match = false
        if(document.querySelector(".active-chat-toggle")){
            document.querySelectorAll(".active-chat-toggle").forEach(toggle => {
                if(toggle.attributes["--data-id"].value === id){
                    match = 1
  
                }
            })
        }   
    

        let header_template = `
            <div class="chat-head-info row align-center">
                <img src="${user.profileUrl}" class="profile-img" />
                <div >
                    <p class='message-username'>${user.name}</p>
                    <p class='online'><span class='glow-green'></span>Online</p>
                </div>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="pin-chat ${match ? 'pinned' : ''}">
                <path d="M14.7419 1.08301C14.8404 1.08283 14.9381 1.10208 15.0292 1.13966C15.1203 1.17724 15.2031 1.23241 15.2729 1.30201L22.6979 8.72701C22.8385 8.86765 22.9175 9.05839 22.9175 9.25726C22.9175 9.45613 22.8385 9.64686 22.6979 9.78751C21.9779 10.5075 21.0899 10.6695 20.4434 10.6695C20.1779 10.6695 19.9409 10.6425 19.7534 10.611L15.0524 15.312C15.1761 15.8106 15.2564 16.319 15.2924 16.8315C15.3614 17.8845 15.2444 19.362 14.2124 20.394C14.0717 20.5346 13.881 20.6136 13.6821 20.6136C13.4833 20.6136 13.2925 20.5346 13.1519 20.394L8.90839 16.152L4.13538 20.925C3.84288 21.2175 2.30688 22.278 2.01438 21.9855C1.72188 21.693 2.78238 20.1555 3.07488 19.8645L7.84788 15.0915L3.60588 10.848C3.46528 10.7074 3.38629 10.5166 3.38629 10.3178C3.38629 10.1189 3.46528 9.92815 3.60588 9.78751C4.63788 8.75551 6.11538 8.63701 7.16838 8.70751C7.68087 8.74342 8.18928 8.82372 8.68788 8.94751L13.3889 4.24801C13.3496 4.01958 13.3296 3.78828 13.3289 3.55651C13.3289 2.91151 13.4909 2.02351 14.2124 1.30201C14.3529 1.16181 14.5434 1.08305 14.7419 1.08301V1.08301Z" fill="white"/>
            </svg>
            <img src="./public/images/icons/close.png" alt="" class="chat-close">
        `

        document.querySelector(".chat-head").innerHTML = header_template

        document.querySelector(".chat-close").addEventListener("click", () => {
            chatManagement.renderMainChat()
            chatManagement.renderMessageHistory()
            document.querySelector(".chat-window").classList.remove("chat-window-show")
            
        })

        document.querySelector("#new-message-send").addEventListener("click", () => {
            let messageText = document.querySelector("#new-message-text")
            if(messageText.value.length > 1){
                let id = messageText.attributes["--data-chat-id"].value
                this.sendMessage(id,messageText.value)
            }
        })
    },

    renderMessageHistory(){
        let target = document.querySelector(".all-messages")
        target.innerHTML = ""
        let added = 0
        this.data.messageHistory.map(message => {
            let user = this.getUser(message.id)

            let messageTemplate = `
            <div class="message-history row align-center" id='${user.id}'>
                <img src='${user.profileUrl}' />
                <div>
                    <p class='message-name'>${user.name}</p>
                    <p class='message-content'>${message.message}</p>
                </div>
                <span class='${message.read ? 'read' : ''} message-read'></span>
            </div>
            `

            if(user.name.toLowerCase().includes(this.filters.name.toLowerCase())){
                target.innerHTML += messageTemplate
                added += 1
            }
            
        })
        if(!added){
            let templateEmpty = `<p class='no-message'>No messages found!</p>`
            target.innerHTML = templateEmpty
        } else{
            document.querySelectorAll(".message-history").forEach(message => {
                message.addEventListener("click", () => {
                    this.renderChatMessages(message.id)
                })
            })
        }
    },


    renderChatMessages(id){
        this.renderActiveChat(id)

        document.querySelector(".pin-chat").addEventListener("click", () => {
            let match = false
            if(document.querySelector(".active-chat-toggle")){
                document.querySelectorAll(".active-chat-toggle").forEach(toggle => {
                    if(toggle.attributes["--data-id"].value === id){
                        toggle.remove()
                        document.querySelector(".pin-chat").classList.remove("pinned")
                        match = 1
                        return
                    }
                })
            }
            if(match){
                return
            }
            let user = this.getUser(id)
            let template = `
                <img src='${user.profileUrl}' class='active-chat-toggle'  --data-id="${id}">
            `
            document.querySelector(".extra-toggles").innerHTML += template
            document.querySelector(".pin-chat").classList.add("pinned")
            document.querySelectorAll(".active-chat-toggle").forEach(toggle => {
                toggle.addEventListener("click", () => {
                    chatManagement.renderActiveChat(toggle.attributes["--data-id"].value)
                    chatManagement.renderChatMessages(toggle.attributes["--data-id"].value)
                    document.querySelector(".chat-window").classList.add("chat-window-show")
                })
            })
        })

        
        let target = document.querySelector(".chat-messages")
        target.innerHTML = ""
        this.data.openedChats.map(chat => {
            chat.messages.map(message => {
                if(chat.id === id){
                    let messageTemplate = `
                    <p class='chat-message ${message.type === 1 ? 'message-received' : 'message-sent'}'>
                    ${message.message}
                    </p>
                    `
                    target.innerHTML += messageTemplate
                }
            })
            
        })

        
    }
}



document.querySelector(".chat-toggle").addEventListener("click", () => {
    chatManagement.renderMainChat()
    chatManagement.renderMessageHistory()
    document.querySelector(".chat-window").classList.add("chat-window-show")

})


chatManagement.data.openedChats.map(chat => {
    let user = chatManagement.getUser(chat.id)
    let template = `
        <img src='${user.profileUrl}' class='active-chat-toggle'  --data-id="${chat.id}">
    `
    document.querySelector(".extra-toggles").innerHTML += template

})


document.querySelectorAll(".active-chat-toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
        chatManagement.renderActiveChat(toggle.attributes["--data-id"].value)
        chatManagement.renderChatMessages(toggle.attributes["--data-id"].value)
        document.querySelector(".chat-window").classList.add("chat-window-show")
    })
})
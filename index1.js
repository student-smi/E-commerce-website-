document.addEventListener("DOMContentLoaded", () => {  

    let button = document.querySelector('button');
    let input = document.querySelector('input');
    
    function validateUsername(username) {
        if(username.trim() === "") {
            button.textContent = "BC details fill kar 😡";
            button.style.backgroundColor = "red";
            button.style.color = "white";
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching) {
            alert("Invalid Username");
        }
        return isMatching;
    }
    
    button.addEventListener('click', () => {
        if(validateUsername(input.value)) {
            // fetchUserDetails(input.value);
        }
    });
});
//     }
//
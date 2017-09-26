<template>
  <div class="contact">
    <img src='../assets/images/lake.jpg' alt="Lake Coeur d'Alene" class="photo">

    <div class="main-container">

        <!-- Text Container on Left Side -->
        <div class="left-container">
            <h4 class="title-1">Have a question? Want to book a session?</h4>
            <h5 class="title-2">Shoot me an email and I'll get back to you ASAP!</h5>

            <!-- Pricing -->
            <p>Portrait Sessions begin at $150</p>
            <p>Famlily Sessions begin at $200</p>
            <p>Events begin at $250</p>
        </div>

        <!-- Contact form on Right Side -->
        <div class="right-container">
            <h1 class="form-title">Contact</h1>
            <!-- Contact Form -->
            <form action="https://formspree.io/wintermist3@gmail.com" method="POST">
                <input type="text" name="name" placeholder="Name" class="form-field form-input">
                <input type="email" name="_replyto" placeholder="Email"  class="form-field form-input">
                <textarea name="message" rows="5" placeholder="Message goes here..." class="form-field form-input"></textarea>
                <input type="submit" value="Send" class="form-field form-btn">
            </form>
            <!-- End Contact Form -->
        </div>
    </div>
    
  </div>
</template>

<script>
</script>

<style scoped>
.main-container {
    margin: 15px 15px 0px 15px;
    display: flex;
    margin-bottom: 20px;
}

/* Header Image */
.photo {
    display: block;
    width: 100%;
    margin-top: 30px;
}

/* ---------- Left Container ---------- */
.left-container {
    flex-grow: 1;
    margin: 15px;
    margin-top: 60px;
    text-align: center;
    width: 40%;
}

.title-1 {
    margin-bottom: 15px;
}

.title-2 {
    margin-bottom: 25px;
    font-style: italic;
}

/* ---------- Right Container ---------- */
/* ------- Contains contact form ------- */
.right-container {
    flex-grow: 2;
    margin: 15px;
}

/* Contact form fields */
.form-field {
    display: block;
    width: 100%;
    margin: 10px 0px 10px 0px;
}

.form-title {
    margin: 0px;
    margin-bottom: 15px;
    width: 100%;
    text-align: center;
}

/* Form Inputs */
form .form-input {
    Font-Family: 'Work Sans', Sans-Serif;
    font-size: 14px;
    font-weight: bold;
    background: #f2f2f2;
    border: solid #dbdbdb 1px;
    outline: 0;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
}

/* Form Button */
form .form-btn {
    Font-Family: 'Work Sans', Sans-Serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: solid #409943 1px;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
}

/* Form Button on Hover */
form .form-btn:hover {
    font-weight: bolder;
}

/* Make Responsive */
@media (max-width: 9000px) {
    .right-container {
        padding-right: 8%;
    }

    .form-title {
        margin-left: 10%;
    }
}

@media (max-width: 1000px) {
    .right-container {
        padding-right: 0px;
    }
}

@media (max-width: 700px) {
    .main-continaer {
        flex-direction: column;
    }
}

</style>

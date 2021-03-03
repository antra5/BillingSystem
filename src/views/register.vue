<template>
  <div class='layout'>
    <div class='header'>
    </div>
    <div class='page-view'>
      <div id='errors'>
      <p class='error-content' id='show-errors'> </p>
      </div>
      <div class='content-page'>
        <div class='form'>
          <div class='input text'>
            <div class='row'>
            <div class='div-text'>Full Name
            </div>
            <input name="name" class='field' type="text" maxlength="50" value="" id="name" v-model="name">
            </div>
            <div class='row'>
            <div class='div-text'>Phone Number
            </div>
            <input name="number" class='field' type="text" value="" id="number" v-model="number">
            </div>
            <div class='row'>
            <div class='div-text'>E-mail Address
            </div>
            <input name="email" class='field' type="text" maxlength="50" value="" id="email" v-model="email">
            </div>
            <div class='row'>
            <div class='div-text'>Address
            </div>
            <input name="address" class='field' type="text" maxlength="150" value="" id="address" v-model="address">
            </div>
            <div class='row'>
            <div class='div-text'>Password
            </div>
            <input type="text" class='field' minlength="6" value="" id="password" v-model="password">
          </div>
          </div>
      </div>
      <router-link to='/customer'>
       <button type="submit" >
        <span class="default-btn" v-on:click="submitDetails"> Create Account</span>
       </button>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'register',
  components: {
  },
  data () {
    return {
      name: '',
      number: '',
      email: '',
      address: '',
      password: ''
    }
  },
  methods: {
    validate: function () {
      var message = ''
      if (this.name === '') {
        message = message + '- Name can\'t be Empty <br>'
      }
      if (this.email === '') {
        message = message + '- Email can\'t be Empty <br>'
      }
      if (isNaN(this.number) || this.phoneNumber === '' || this.phoneNumber.length !== 10) {
        message += '- Invalid Phone number, must be 10 digits <br>'
      }
      if (this.password === '' || (this.password.length < 6 || this.password.length > 10)) {
        message += '- Invalid password, must be between 6 and 10 characters <br>'
      }
      this.message = message
      if (this.message !== '') {
        document.getElementById('errors').style.display = 'block'
        document.getElementById('show-errors').innerHTML = message
        return false
      } else {
        document.getElementById('errors').style.display = 'none'
        return true
      }
    },
    submitDetails: function () {
      const user = {
        name: this.name,
        address: this.address,
        phone: this.phone,
        email: this.email,
        password: this.password
      }
      if (this.validate) {
        axios.post('http://localhost:5432/customers', user)
          .then(response => {
            console.log(response)
          })
      }
    }
  }
}

</script>

<style>
.input div span {
    font-weight: 700;
    color: red;
    padding: 20px;
    border:1px black;
    align-content: space-between;
}
div {
  flex: auto;
  box-sizing: border-box;
  display: block;

}

* {
  margin: 0;
  padding: 0;
}
/* input[type=text],number,password {
  width: 40%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical
} */
.field {
  width: 18rem;
}
.input {
  border-radius: 5px;
  padding: 20px;
}

#errors{
    display: none;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    background: rgb(99, 99, 99, 0.5);
    position: fixed;
    border: 1px solid white;
  }

  #errors > div {
    padding: 20px;
  }
  .error-content{
    margin: 20px;
    margin-top: 50px;
    text-align: left;
    color: red;
  }
  .div-text {
        width: -webkit-fill-available;
        padding-bottom: 10px;
  }
body {
  background-color: #99CDA9;
}
.content-page {
  padding: 3.5rem;

}
button {
  background-color: darkgreen;
  border-radius: 2px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 18px;
  margin: auto;
}
form {
  border: 1px black;
}
</style>

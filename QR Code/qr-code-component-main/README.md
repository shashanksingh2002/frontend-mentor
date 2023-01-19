# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
  A simple front end mini project developed using basic html and css. A qr code card which is responsive and made using web first approach.
### Screenshot

![Screenshot_20230120_120646](https://user-images.githubusercontent.com/82604413/213531611-4a528b2c-2b32-43ae-99e6-5f4c5e2079b7.png)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Web-first workflow

### What I learned

```
  <div class="main-container">
      <img src="./images/image-qr-code.png" alt="qr-code">
      <div class="qr-info">
        <p>Improve your front-end skills by building projects</p>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
  </div>
```
```
  @media only screen and (max-width: 725px) {
    .main-container{
        min-width: 90%;
    }
}
.main-container{
    width:40%;
    margin:2% auto;
    border-radius: 25px;
    padding: 2rem;
    background-color: white;
}
.main-container img{
    width:95%;
    height:60%;
    margin: auto auto;
    outline:2px solid red;
    border-radius: 25px;
}
.qr-info{
    margin-top: 1rem;
    text-align: center;
}
.qr-info p:first-of-type{
    font-weight: 900;
}
.attribution{
    margin-top: 1rem;
    text-align: center;
}
```

## Author

- Website - [Shashank Singh]([https://www.your-site.com](https://github.com/shashanksingh2002))



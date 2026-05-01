// const { createElement } = require("react");

const links = [
"https://drive.google.com/file/d/1fM7zGnGDCijBvRSxpjWYh-J8BoGPY5BS/view?usp=drive_link",
"https://drive.google.com/file/d/1wro1aqxK1IbjrRAItA31BIjIMSg09vnV/view?usp=drive_link",
"https://drive.google.com/file/d/1p6X-n2kgOUDK9Re6nhJf0r5DkEDHypzO/view?usp=drive_link",
"https://drive.google.com/file/d/1ugd7vtYWyuzFhJz5vsAVWeGTrk_YEXtK/view?usp=drive_link",
"https://drive.google.com/file/d/1VYrC8NSPLI0MqaAKn-UfzitH-Cg-rxvE/view?usp=drive_link",
"https://drive.google.com/file/d/1LwpnjXgtO0WLwRdDZfYdwIhjPjmz7L6V/view?usp=drive_link",
"https://drive.google.com/file/d/1u8NCcmvtjUZbn_kjfxGboEVplpaYjzAF/view?usp=drive_link",
"https://drive.google.com/file/d/16aolO0e8tYFoHbDq-xQFEwuHRB3l1OdI/view?usp=drive_link",
"https://drive.google.com/file/d/1AgcNMd7PirQM7YbfjWBQIGYRdlZvyA8i/view?usp=drive_link",
"https://drive.google.com/file/d/12GH-R9clferi-zu-mAY0X3sktZLbfyuD/view?usp=drive_link",
"https://drive.google.com/file/d/1vLw6ZCpTTQjgxxX5IjulSpjNpklEaGpK/view?usp=drive_link",
"https://drive.google.com/file/d/18wDXE1dEzIfj6e7Z4EVr6n7ZH1Qo92JP/view?usp=drive_link",
"https://drive.google.com/file/d/1WVFqiYX_IgkPcaGI2YGAXtT1f8b3hldx/view?usp=drive_link",
"https://drive.google.com/file/d/1qXgUbi8GTS3HGL_RFsdRcwxxi7Z3YHNp/view?usp=drive_link",
"https://drive.google.com/file/d/1aP0n_iK7fuBSjE-0V8S7Et6Uw2X_MsAh/view?usp=drive_link",
"https://drive.google.com/file/d/116Y0smhwSv6DBUijbkmTb1ClObJbaKXK/view?usp=drive_link",
"https://drive.google.com/file/d/1jtb2maWrxlYfwBtbCTiEU7em7YcA-Asd/view?usp=drive_link",
"https://drive.google.com/file/d/1mL1MwPyDNci6PwO9EI4Nh2wOMAjUHF02/view?usp=drive_link",
"https://drive.google.com/file/d/1dughh-X6vCxKOPPBJsOh9OCPnDwHH6Md/view?usp=drive_link",
"https://drive.google.com/file/d/1paVukV-XvbUZuhs9G2qP07A1rFDnXCPn/view?usp=drive_link",
"https://drive.google.com/file/d/18bJdYCuYXU2c_7MtlzHx38BFTxq-lYr7/view?usp=drive_link",
"https://drive.google.com/file/d/13o8XlhUIc_kSxnjA5ck9mKXObCMIgG2f/view?usp=drive_link",
"https://drive.google.com/file/d/1eMmH0NKx3_-0eEnKeoBJqk308nth-gOk/view?usp=drive_link",
"https://drive.google.com/file/d/1xdT1U-QRk3KvK0gx7I17YKNMYa5t7vbQ/view?usp=drive_link",
"https://drive.google.com/file/d/1r8dr24q7ItLPDrk3EU_n-nNRo6Fr4Yos/view?usp=drive_link",
"https://drive.google.com/file/d/1FJvf5KEFlaWsLZqSZyDLhJ1gek1PoHZL/view?usp=drive_link",
"https://drive.google.com/file/d/15O4J0q6PhqwAvFHklmI9otUazXMTUlUl/view?usp=drive_link",
"https://drive.google.com/file/d/1Di3tLXpu-FgPY0oMm9bYnDWFX-zqTL14/view?usp=drive_link",
"https://drive.google.com/file/d/1f3pws6SzYCC4y8dTH2TK_sn2Jg8Gqv6H/view?usp=drive_link",
"https://drive.google.com/file/d/1pioGfAeSPVz69ngqp6mCetnBNEh1EJM6/view?usp=drive_link",
"https://drive.google.com/file/d/1tG1tE9M8_hQBfEbB71wHDwCPpjH1wLr5/view?usp=drive_link",
"https://drive.google.com/file/d/1tjNTJF_Bfm3coZvw9hfgSr38zjS9pvTG/view?usp=drive_link",
"https://drive.google.com/file/d/1VnLSkw9LhFdmNSQP_bfuKhT7k0DX_OoR/view?usp=drive_link",
"https://drive.google.com/file/d/1Dez0cjsDqYDYYLCGze7IInGSk89YDUPS/view?usp=drive_link",
"https://drive.google.com/file/d/1-uxLP7Gyx8Px1nuqI4wnVClEa70d0x6z/view?usp=drive_link",
"https://drive.google.com/file/d/14D5fZ6l5uF_Y8GDIKrJ61TuzWkrR1Otb/view?usp=drive_link",
"https://drive.google.com/file/d/1EybL0iBWliyJiOc1y_uyucJEzbWH_nfC/view?usp=drive_link",
"https://drive.google.com/file/d/1hIzad4L5mpIKIup2mteqNUro-brr-2Zc/view?usp=drive_link",
"https://drive.google.com/file/d/1hfbC4ybhECMjQBqEQdMLWAXvZB1E_T52/view?usp=drive_link",
"https://drive.google.com/file/d/1xBpRGct0n56Oskf2t1QrbiET4SLvISzd/view?usp=drive_link",
"https://drive.google.com/file/d/1VP3TOGWCjVlOcpwm7gjNTgVJnKPsDr64/view?usp=drive_link",
"https://drive.google.com/file/d/1CDA2iEsjI-jvd6FDsnWBSMa6PgxgT5_v/view?usp=drive_link",
"https://drive.google.com/file/d/169ie-t6lBJlFRQaiYdpfFFnJE9CQbiq9/view?usp=drive_link",
"https://drive.google.com/file/d/1qJWZKBMiM3ttHnhM7VIOKvZ2td3KJ_TT/view?usp=drive_link",
"https://drive.google.com/file/d/1FuY-W6KF6ys2yD68ggYvWtn0koMoLsIG/view?usp=drive_link",
"https://drive.google.com/file/d/1_gxD0CbdN_L4Lp1z8UUbGyRVSgo3Ll3k/view?usp=drive_link",
"https://drive.google.com/file/d/1EEOpwexwStEhecsynar3pqhYWr3gTaTs/view?usp=drive_link",
"https://drive.google.com/file/d/1fLZm4qaGolXafJle71pB6WrWIoKtfVIH/view?usp=drive_link",
"https://drive.google.com/file/d/1iz1dGzmdBb8NY-4y2wjhsfLETP48oIDK/view?usp=drive_link",
"https://drive.google.com/file/d/1gV1UyAHm2y3tl3Zghtgu3_ABRyqxFRKO/view?usp=drive_link",
"https://drive.google.com/file/d/1Bp3D3_xiErdijNbXgW3Lx7uC6E2JqA-Y/view?usp=drive_link",
"https://drive.google.com/file/d/11_SCH9b-z2btocZukbvaaRejPffIVuWU/view?usp=drive_link",
"https://drive.google.com/file/d/1fju0tps5bk0KAxENvxCkRJTTGo9VseLG/view?usp=drive_link",
"https://drive.google.com/file/d/1L8U8KDQOw7WW5xT1sNTGbvj9-9Y1NI_o/view?usp=drive_link",
"https://drive.google.com/file/d/1gAYDpdGAKpH2MGCBKCsxPkhmJJjkNPkd/view?usp=drive_link",
"https://drive.google.com/file/d/1eyb2lfWvtHKUD0SNgJHSjFTbftmhhTBy/view?usp=drive_link",
"https://drive.google.com/file/d/1Qw5eOgeAYYem5-Ji9BjrTOQpJ0sXiLh3/view?usp=drive_link",
"https://drive.google.com/file/d/1eqO-6mAgIYmQ_VACuHTwSXyPzG-MS2o3/view?usp=drive_link",
"https://drive.google.com/file/d/1zystIJt3Vt2VTNc2Cj4s2gJh1L9TAT93/view?usp=drive_link",
"https://drive.google.com/file/d/1J_qL1EgyWlj8b6lhlCeFL8dmHOea9uXV/view?usp=drive_link",
"https://drive.google.com/file/d/1MD0R-1HOZYh9y3xcniBs1YSqzTvgYsC9/view?usp=drive_link",
"https://drive.google.com/file/d/1ZH_CPfZiVY3gCSsgKc_RZQtPSgvzm697/view?usp=drive_link",
"https://drive.google.com/file/d/1VoE313_rdLSHrNyDpnO-eh-oMZLQkEHm/view?usp=drive_link",
"https://drive.google.com/file/d/1Y2I5_PlKnic51O3T3EpgzNrU5A_qHIl-/view?usp=drive_link",
"https://drive.google.com/file/d/1du5XLq9dp44B5RtO30ZHXj43-Ncvgt9T/view?usp=drive_link",
"https://drive.google.com/file/d/1YlbNfNXzbkJtHGpqo4IFirtSc5J0RqG8/view?usp=drive_link",
"https://drive.google.com/file/d/1e_3RJAFf-PWmsGlKtAyN6E1iwbT34Qds/view?usp=drive_link",
"https://drive.google.com/file/d/1jzBwcOaRPrcXw9IEuL0D5hEZfMP8wOkn/view?usp=drive_link",
"https://drive.google.com/file/d/1ZvCbBJj5qFc1Z2iNRYLfxv9Y0SSxzyXN/view?usp=drive_link",
"https://drive.google.com/file/d/1rI8b3lXQYPXu6OLzmA7PVuCbXVv4fH3G/view?usp=drive_link",
"https://drive.google.com/file/d/1YYnwkexiykLqSBI3CJlp3_6WPtCDoPDy/view?usp=drive_link",
"https://drive.google.com/file/d/1ZaB40OL56fKq-t0IjLFS7d_1_eEjTkLE/view?usp=drive_link",
"https://drive.google.com/file/d/1MSRp2KG5qdNBlHq2AKKaSKJOzY0y3TPM/view?usp=drive_link",
"https://drive.google.com/file/d/1bBlS0GsZ61mCjqfeZ0X9lhMid_AKD1VM/view?usp=drive_link",
"https://drive.google.com/file/d/14ulzmwFuAUabouxaHN0XTsNwPJzSZaB4/view?usp=drive_link",
"https://drive.google.com/file/d/1n_fJ9s8LSVZPyZxXFoQpBTf-Qf7KNaxW/view?usp=drive_link",
"https://drive.google.com/file/d/1y-m_1JRka_zwz4xToaeywfqqB5aN1JoP/view?usp=drive_link",
"https://drive.google.com/file/d/1EuuwZCSoycvpwZmpYtuo_EWOa5qlj8yV/view?usp=drive_link",
"https://drive.google.com/file/d/13iIQv4j6DESMrWPH1APJjoGHx83U__Di/view?usp=drive_link",
"https://drive.google.com/file/d/1DOr39wQY3s0r8WqvgspBwhe-ItnhUNOm/view?usp=drive_link",
"https://drive.google.com/file/d/1G9Q7VrnK45c9wYyworahqwGI2Eb_WkcY/view?usp=drive_link",
"https://drive.google.com/file/d/1VQohswsoGcUB3LTz6m0Fni6Dd72cFXqq/view?usp=drive_link",
"https://drive.google.com/file/d/1Ic1cXJgTLCx9RdSWn1okijO8ZCFMHZSB/view?usp=drive_link",
"https://drive.google.com/file/d/1F-lOLlv5HvoeYergO7d8tA3TfHtYHgtB/view?usp=drive_link",
"https://drive.google.com/file/d/1uCgOZwjJkAzXrwc3g91vQ07U9GgdDqcv/view?usp=drive_link",
"https://drive.google.com/file/d/1NxfXhVtJ41Ap0qkAUKhs0MAwjku4tLYj/view?usp=drive_link",
"https://drive.google.com/file/d/1AIlsFxfPV05wYm3-k73G7WIHHtt1x2qe/view?usp=drive_link",
"https://drive.google.com/file/d/11hBG4l4F4yLGNxpt77c5FtgItvkOZzQv/view?usp=drive_link",
"https://drive.google.com/file/d/1pJf_v-zoVhZG4DKg2gtpD3gIFLTEF_PV/view?usp=drive_link",
"https://drive.google.com/file/d/1am81rDhg0VdLVvFzQ2DLNvGoO9aLV3pO/view?usp=drive_link",
"https://drive.google.com/file/d/1g7YweIZRQ7q72uv91to-bq6Jrh2Jk2qI/view?usp=drive_link",
"https://drive.google.com/file/d/1R0H6-4IvtdMjD2rfm_zcHfPQkgRJc_R0/view?usp=drive_link",
"https://drive.google.com/file/d/1rGPe_L7yLxmYTcwkQjvpcpazMY5yAMzB/view?usp=drive_link",
"https://drive.google.com/file/d/1kllY7LGP8XHgVrZS7Mnbf44YNYwMLKN0/view?usp=drive_link",
"https://drive.google.com/file/d/186iRyYeI51xVqt3l9nbx5k6SOYZ1A368/view?usp=drive_link",
"https://drive.google.com/file/d/1hRhvw4rHJzCGoOW-1v1tfs4FkL5yt6JN/view?usp=drive_link",
"https://drive.google.com/file/d/10oBUct6ef--5URoVx8RRTQFIYfSQpGjp/view?usp=drive_link",
"https://drive.google.com/file/d/1ip0JFgmJwabH4M5N93xLPzF2q6EfjLxL/view?usp=drive_link",
"https://drive.google.com/file/d/1IJxrECmVWkEdMQheTM4WJqqAS_iGF27Q/view?usp=drive_link",
"https://drive.google.com/file/d/1byAKCSpXG8-7c7sB9GnpJ5-zIoS3EccR/view?usp=drive_link",
"https://drive.google.com/file/d/1rCIRz1kXWswAt9-yYmdjrqnBAD-xevtm/view?usp=drive_link",
"https://drive.google.com/file/d/17mJnFt6205Jh6Uh3tyedK-2Mel_YJDzz/view?usp=drive_link",
"https://drive.google.com/file/d/17I0fd06A6RVKeHZDYFrjFdREZI2Imk9u/view?usp=drive_link",
"https://drive.google.com/file/d/1eKdxPheAGxDosu6v1ntEtEg9FZdqU9tI/view?usp=drive_link",
"https://drive.google.com/file/d/1Q32_Vp4pWVEG6kdCXIZTOq5XqJgHlugR/view?usp=drive_link",
"https://drive.google.com/file/d/1SCrjroljk62nidXyvZ4z51Mr125ZFglL/view?usp=drive_link",
"https://drive.google.com/file/d/1o-HzojRe6J0Ljeq3fPbKv9kbbPLRixzN/view?usp=drive_link",
"https://drive.google.com/file/d/1HwSM16hIV_TWLTfeqWWkJViCtMMknKEn/view?usp=drive_link",
"https://drive.google.com/file/d/12QCuh__p9o9f_4OMmZXZHU_WaJgwhXQT/view?usp=drive_link",
"https://drive.google.com/file/d/1PMu8fTIHK7rliX3IAVWlY01uJEeFrslx/view?usp=drive_link",
"https://drive.google.com/file/d/1h8p38OLopiNaua7C7nV4vmJWxFWRRg93/view?usp=drive_link",
"https://drive.google.com/file/d/1Je3rRN6pIXVsk5pwapEmHTRF3013zgqo/view?usp=drive_link",
"https://drive.google.com/file/d/1bTDRbuVcAv53jk-VbS8HyxTi2sRVSZuW/view?usp=drive_link",
"https://drive.google.com/file/d/1JfvEvliAPnCid6KM7CgIopUqRDRKEHfX/view?usp=drive_link",
"https://drive.google.com/file/d/1CtUQ-WcAY04Tg2pOXkHOqVFUR3kMvYOb/view?usp=drive_link",
"https://drive.google.com/file/d/1fhGXmo9joXAteIdgGIFJqZr48xjY6Vv1/view?usp=drive_link",
"https://drive.google.com/file/d/1_4RAKfOofpX1ZWPx4d9WCtF6t4U-F0jQ/view?usp=drive_link",
"https://drive.google.com/file/d/1tGXI2AIfepae3xEdDjcgFowY4XO0VlYY/view?usp=drive_link",
"https://drive.google.com/file/d/1l472wxdFeOQclCY9LnSw36vJ9YpXg0G-/view?usp=drive_link",
"https://drive.google.com/file/d/1SUOH5yeClC03Ebfl9Qy8oOm75QLqTUwO/view?usp=drive_link"
];

// const g=document.getElementById("grammer");

// Links.forEach((links,index)=>{
// const div=document.createElement("div")
// div.className="item";
// const title=titles[index] || `grammers ${index+1}`;
// div.innerHTML=`<a href="${links}">${title}</a>`
// g.appendChild(div);
// // })
// const links = [
//   "https://drive.google.com/file/d/1l472wxdFeOQclCY9LnSw36vJ9YpXg0G-/view?usp=drive_link",
//   "https://drive.google.com/file/d/1SUOH5yeClC03Ebfl9Qy8oOm75QLqTUwO/view?usp=drive_link"
// ];

const titles = [
  "Grammar Book 1",
  "Grammar Book 2"
];

const g = document.getElementById("gramer");

links.forEach((link, index) => {
  const div = document.createElement("div");
  div.className = "item";

  const title = titles[index] || `gramer ${index + 1}`;

  div.innerHTML = `
    <a href="${link}" target="_blank">
      ${title}
    </a>
  `;

  g.appendChild(div);
});
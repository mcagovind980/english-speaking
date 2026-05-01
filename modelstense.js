const link=[
"https://drive.google.com/file/d/1RcbwdktezUHWH0Wo8NFU44RZaHyobw99/view?usp=drive_link",
"https://drive.google.com/file/d/1YqVodVvNHQYSo7b2DXKZM0omiYNWcctv/view?usp=drive_link",
"https://drive.google.com/file/d/1-RYl0-8mGtkHkp-FSDsQdDkt0-HlZjr_/view?usp=drive_link",
"https://drive.google.com/file/d/1BCJwuslERsp1W89T9cNh-hfn6hB0QL7V/view?usp=drive_link",
"https://drive.google.com/file/d/17RagKlfTNMFui8iciZR467QcWRvd0A7b/view?usp=drive_link",
"https://drive.google.com/file/d/1qhtnxmrcl4R-ZRvQs9ct7nEZDhrdYRm4/view?usp=drive_link",
"https://drive.google.com/file/d/1pKY9Q98d_WAqpxvlaN2yjt5sjrEnYs8S/view?usp=drive_link",
"https://drive.google.com/file/d/1xXkYgeqDuB7zGPmGUrOqm-29ATZP_mNl/view?usp=drive_link",
"https://drive.google.com/file/d/1_6P_ybj918KhnkykOHYrk-INyyPFS5nt/view?usp=drive_link",
"https://drive.google.com/file/d/1tmbjZss5_ag9EXWp2VIpsOBzeZ5U4yxS/view?usp=drive_link",
"https://drive.google.com/file/d/1Umqh3ulv920jrol8POgp1qy4m3lxHqm1/view?usp=drive_link",
"https://drive.google.com/file/d/1sqkT6auf5cENoQTZEQ8l3A9jBEbOpz_g/view?usp=drive_link",
"https://drive.google.com/file/d/1E3Om6c7SAcZ9R0ffFswPZlH0ekDkYlvs/view?usp=drive_link",
"https://drive.google.com/file/d/1NmR788kahM1eXNYOsIby6ytB1uxpgd8v/view?usp=drive_link",
"https://drive.google.com/file/d/1yDgixcVDgWWtZ908qnM51eTSbOrc9GaW/view?usp=drive_link",
"https://drive.google.com/file/d/1ohashgI3mWMcsREbVkGNQ9Q-JlQeh3lq/view?usp=drive_link",
"https://drive.google.com/file/d/1UYbAGNiyk2n4J9bvw07hYoKzl7-PZe1t/view?usp=drive_link",
"https://drive.google.com/file/d/1ShEd3-B_aAo7QyG5ueEErxXhey4tOs1h/view?usp=drive_link",
"https://drive.google.com/file/d/1jai-MgTjW1rxnDkgbnASrr3X2xV-IzR1/view?usp=drive_link",
"https://drive.google.com/file/d/11q2L_lAg69QY1k6J98mB7JblMsGj27ZW/view?usp=drive_link",
"https://drive.google.com/file/d/1W5_a1sCqtVEUbn9pz3LAPXKw2PJuG3Jj/view?usp=drive_link",
"https://drive.google.com/file/d/1_c3faNEE8hBXyA4NvqH_w0O_ScUXfONo/view?usp=drive_link",
"https://drive.google.com/file/d/18sMnTId4BNgWMRRqCqkhcaS1u2boeV43/view?usp=drive_link",
"https://drive.google.com/file/d/1RRDEpRXsLdE_ZcvlIwdr6rkLvyN4XVLp/view?usp=drive_link",
"https://drive.google.com/file/d/11_XM79qY9OsQFoHcovJH4CdgTVMmbN2J/view?usp=drive_link",
"https://drive.google.com/file/d/1WAX583e1HCXMy81NVFpOUfq3-BFbP46u/view?usp=drive_link",
"https://drive.google.com/file/d/1-3aSNch4XH5M_R4287j16SsUvuSeZsW-/view?usp=drive_link",
"https://drive.google.com/file/d/1YpG1Wyu7eiCZ6F2WWq9oNpUKH_ZdPPt2/view?usp=drive_link",
"https://drive.google.com/file/d/1p93DCHQ2r8qzXUSBqw4TBA_02TANdI4s/view?usp=drive_link",
"https://drive.google.com/file/d/1goIkwlZqUjk8Bvc7RcTUXIwyhjCd4CIT/view?usp=drive_link",
"https://drive.google.com/file/d/1ep4WXEBU6GehoF4szNvv5Xk1tl1Sq983/view?usp=drive_link",
"https://drive.google.com/file/d/1Y9l9Fo_FhP0bDG9cVlgIDkibvigRTVDd/view?usp=drive_link",
"https://drive.google.com/file/d/1XkHk7QPIbUWytlJR0J7FlRnJ2VGXRcVp/view?usp=drive_link",
"https://drive.google.com/file/d/1rBI_p0sT1TCoLiy6mF2BOe4WX4Jw0tIX/view?usp=drive_link",
"https://drive.google.com/file/d/1YC3OAzM3A_hNLoJ3dBf4IbuNZO6VNvIJ/view?usp=drive_link",
"https://drive.google.com/file/d/1Z9aeuCnb8DC2U-bRfI-Cr7dUY9OirxhU/view?usp=drive_link",
"https://drive.google.com/file/d/1nWd06FboEg-ZiY2_TAoiZ8wLpg_9PWxw/view?usp=drive_link"
]

const titles=[
    " modles"
]
const f=document.getElementById("tense");
link.forEach((link,index)=>{
const div=document.createElement("div");
div.className="item";
const title=titles[index] || `Ebook ${index+1}`;
div.innerHTML=`<a href="${link}">${title}</a>`;
f.appendChild(div);
}
);
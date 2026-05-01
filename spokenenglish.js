
const link=[
    "https://drive.google.com/file/d/1RdlvzPDVFZ6zIoiQ9HmJo11R58EGdPk6/view?usp=drive_link",
"https://drive.google.com/file/d/1M3PxZE9jz5YXcBx4JuygoJIOgHd6VG3E/view?usp=drive_link",
"https://drive.google.com/file/d/1i94GVUXRhaLxq-f336l_Wnd90CBTeX7-/view?usp=drive_link",
"https://drive.google.com/file/d/1JO7zWl6tiqVUxhIPSGZzBM4z4dFEKUUz/view?usp=drive_link",
"https://drive.google.com/file/d/1YcC3o-1xlYVcIgoh8_iPYseTGxNCbg76/view?usp=drive_link",
"https://drive.google.com/file/d/1Mh9z4WLWFBlwga8HJEYHeeI6KAOI454v/view?usp=drive_link",
"https://drive.google.com/file/d/1h_tKn3XolzEoWBsQQWrB_A-lrP6tKZ-L/view?usp=drive_link",
"https://drive.google.com/file/d/1HFivEioUx4yy6zbn_LBLMvHvqVNdjsM-/view?usp=drive_link",
"https://drive.google.com/file/d/1PIYdaBDcvNlaGhMMdoD6h4Ag1jxOPZ5s/view?usp=drive_link",
"https://drive.google.com/file/d/1yh7ztU7RR8bHRLb-bu4PG37PzmStvPOH/view?usp=drive_link",
"https://drive.google.com/file/d/1rJI2QFxy0Brkp0WQGg46kuWZ5sF8Wcox/view?usp=drive_link",
"https://drive.google.com/file/d/1TAtbx9JvIqBlsCuHvEGczO67kckNl-dA/view?usp=drive_link",
"https://drive.google.com/file/d/1DeSaByjPgU5BxHfy32_iqxgiOv8DocXZ/view?usp=drive_link",
"https://drive.google.com/file/d/1upT3AC2Uf9EOvJUqzdjcY7S3yTXaECtb/view?usp=drive_link",
"https://drive.google.com/file/d/1XfWttBwhXH4fAevzuLT2218XK2MfbC_Q/view?usp=drive_link",
"https://drive.google.com/file/d/1D90J5C431nwQk-UHFz1-T3VDhRjvSDeB/view?usp=drive_link",
"https://drive.google.com/file/d/1tSYlrsCsR9ls93bhrhPnOVN0i75x5m-N/view?usp=drive_link",
"https://drive.google.com/file/d/1h9AiLKZyzNTJxCE4uaCypFozxKfJagi-/view?usp=drive_link",
"https://drive.google.com/file/d/15BqMmI01sVK34N292wFlo_CacfCO6a9y/view?usp=drive_link",
"https://drive.google.com/file/d/1Lc_hghIh9IyDuYnTP0LFxW2Hi4ePEdQS/view?usp=drive_link",
"https://drive.google.com/file/d/14MzBcQ7_1b0AsOHoUvzFmRVvFu3r5JPF/view?usp=drive_link",
"https://drive.google.com/file/d/1NrouLrdlbDgHsIiFwocjMFgoERn7vbV2/view?usp=drive_link",
"https://drive.google.com/file/d/137AaTtrZOYdsDpU6jLxbeBHJVnMfkW0W/view?usp=drive_link",
"https://drive.google.com/file/d/1s4qru_MSGNnB22TaBMzfRrUKffpAjshe/view?usp=drive_link",
"https://drive.google.com/file/d/1zYldkRB1lKnSZ8qkTOAhHaHgw-cYSj0A/view?usp=drive_link",
"https://drive.google.com/file/d/1fnr-BbbdpHrlvsJaVB51iMWQH_bhOkIX/view?usp=drive_link",
"https://drive.google.com/file/d/1y33fWTTy83nV89IO-voBGKP_H6dP1L97/view?usp=drive_link",
"https://drive.google.com/file/d/1zHgF3TEpJEdXeWLiOssauRwbTVbRepJ4/view?usp=drive_link",
"https://drive.google.com/file/d/1BVcA-ZRvT644Dbs-F8t0n0BhuY7b-8HX/view?usp=drive_link"
]

const titles = [
  "Present Tense",
  "Past Tense",
  "Future Tense"
];

  const g = document.getElementById("spoken");  //id
  link.forEach((link, index) => {                //link fetch
  const div = document.createElement("div");       //div create
  div.className = "item";                           //class create inside id 
 const title = titles[index] || `Ebook ${index + 1}`;      //name inside anchar tag
  div.innerHTML = `<a href="${link}" target="_blank">${title}</a>`;   //design title link inside anchar tag

  g.appendChild(div);           //div me add krne pr
});




const images = [
    { src: "picture/s1.png", caption: "doll" },
    { src: "picture/s2.png", caption: "jacket" },
    { src: "picture/s3.png", caption: "pajamas" },
    { src: "picture/s4.png", caption: "jumpsuit" },
    { src: "picture/s8.jpg", caption: "pants"},
    { src: "picture/s6.jpg ",caption: "vest"},
    { src: "picture/s7.jpg", caption: "t-shirt"},
    { src: "picture/s5.jpg", caption: "coat"},
    // 可以在这里添加更多图片和文字
  ];

document.getElementById('search-btn').addEventListener('click', () =>{
    const container = document.getElementById('pictures-container');
    container.innerHTML = ' '
    
    const selectedImages = images.sort(() => 0.5 - Math.random()).slice(0, 5)

    // selectedImages.forEach(item =>{
    //     const pictureItem = document.createElement('div');
    //     pictureItem.className = 'picture-item'

    //     const img = document.createElement('img')
    //     img.src = item.src;
    //     img.alt = item.caption;

    //     const caption = document.createElement('div');
    //     caption.className = 'caption';

    //     caption.textContent = item.caption;

    //     pictureItem.appendChild(img);
    //     pictureItem.appendChild(caption);
    //     container.appendChild(pictureItem);

    // })

    selectedImages.forEach(item =>{
        const pictures_container = document.createElement('div')
        pictures_container.className = 'picture-item'

        const img  = document.createElement('img')
        img.src = item.src;
        img.alt = item.caption;

        const caption = document.createElement('div')
        caption.className = 'caption'
        
        const link = document.createElement('a');
        link.href = item.link; 
        link.textContent = item.caption;
        link.target = "_blank"; 
    
        // 将链接添加到 caption 中
        caption.appendChild(link);

        pictures_container.appendChild(img)
        pictures_container.appendChild(caption)
        container.appendChild(pictures_container)

    

    })

})
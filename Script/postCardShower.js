export function showCards(data = {}) {
    const cardsCon = document.querySelector(".cards-container")
    cardsCon.innerHTML = "";
    Object.keys(data).forEach(element => {
        const singlePostData = data[element]
        const postTypeIcon = singlePostData.type === "Article" ? "✍️" : (singlePostData.type === "Education" ? "🔬️" : (singlePostData.type === "Meetup" ? "🗓️" : (singlePostData.type === "Job" ? "💼️" : "✅")))
        let subHeadingSection = '';
        for (let index = 0; index < singlePostData.subHeading.length; index++) {
            subHeadingSection = subHeadingSection + `<div class="post-sub-heading">
                                                        <img src="Icons/${singlePostData.subHeading[index].type === 'Date' ? 'calander' : (singlePostData.subHeading[index].type === 'Location' ? 'location' : 'bag')}.svg">
                                                        <div class="bold-text">${singlePostData.subHeading[index].type === 'Date' || singlePostData.subHeading[index].type === 'Location' ? singlePostData.subHeading[index].data : (singlePostData.subHeading[index].type === 'Link' ? singlePostData.subHeading[index].linkName : "Error")}</div>
                                                    </div>`
        }
        cardsCon.innerHTML += `
        <div class="card">
                ${singlePostData.imgSrc === "" ? `` : `<img src=${singlePostData.imgSrc} class="thumbnail">`}
                <div class="post-details-container">
                    <div class="post-type bold-text">${postTypeIcon}${singlePostData.type}</div>
                    <div class="post-heading-container">
                        <div class="post-heading bold-text">${singlePostData.heading}</div>
                        <div class="options-btn" onclick='clickHandlerForOptionBtns(event.target)'>
                            <img src="Icons/threeDot.svg">
                        </div>
                    </div>
                    <div class="post-sub-heading-container">${subHeadingSection}</div>
                    ${singlePostData.about === "" ? `<div class="post-demo">${singlePostData.about}</div>` : ``}
                    ${singlePostData.btn ? (`<div class="post-action-btn ${singlePostData.btn.color}-text">${singlePostData.btn.label}</div>`) : ""}
                    <div class="post-details">
                        <div class="creater">
                            <img src=${singlePostData.creator.profilePicSrc} class="creater-img">
                            <div>
                                <div class="name bold-text">${singlePostData.creator.name}</div>
                                <div class="mobile post-view-count">${singlePostData.views / 1000}k views</div>
                            </div>
                        </div>
                        <div class="post-views-and-share-details">
                            <div class="post-views-container">
                                <img src="Icons/eye.svg">
                                <div class="post-view-count">${singlePostData.views / 1000}k views</div>
                            </div>
                            <div class="share-post-btn">
                                <img src="Icons/share.svg">
                                <p>Share</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
}
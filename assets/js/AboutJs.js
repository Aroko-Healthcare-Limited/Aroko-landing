// Content for each overview item
const contentData = {
    mission: {
        title: "Our Mission Statement",
        text: "We offer affordable yearly payment plans for our users."
    },
    vision: {
        title: "Our Vision Statement",
        text: "To make healthcare accessible to everyone."
    },
    values: {
        title: "Our Core Values & Initiatives",
        text: "Integrity, Compassion, and Excellence in service."
    }
};

const overviewItems = document.querySelectorAll('.overview-item');
const overviewText = document.getElementById('overview-text');
const overviewTitle = document.querySelector('#overview-content > div > h4');
// const overviewImage = document.getElementById('overview-image');

overviewItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get the content key from the data attribute
        const contentKey = item.getAttribute('data-content');

        // Update the right side content based on the clicked item
        overviewTitle.textContent = contentData[contentKey].title;
        overviewText.textContent = contentData[contentKey].text;
        // overviewImage.src = contentData[contentKey].image;

        // Update styles to indicate selection
        overviewItems.forEach(i => {
            i.querySelector('i').classList.remove('text-pink-500');
            i.querySelector('i').classList.add('text-gray-400');
            i.querySelector('span').classList.remove('font-semibold', 'text-gray-800');
            i.querySelector('span').classList.add('text-gray-600');
        });

        item.querySelector('i').classList.add('text-pink-500');
        item.querySelector('span').classList.add('font-semibold', 'text-gray-800');
        item.querySelector('span').classList.remove('text-gray-600');
    });
});
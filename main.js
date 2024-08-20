const compliments = ['You look amazing today', 'You have nice eyes', 'I really like your outfit', 'have a good day'];
const chooseMessage = () => {
    return compliments[Math.floor(Math.random() * 4)];
};

console.log(chooseMessage());
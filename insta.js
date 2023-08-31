function follow(num)
{
    const word = document.querySelector(`.switch-button${num}`).innerHTML;

    if(word === 'Follow')
    {
        document.querySelector(`.switch-button${num}`).innerHTML = 'Following';
        document.querySelector(`.switch-button${num}`).classList.add('following');
    }
    else
    {
        document.querySelector(`.switch-button${num}`).innerHTML = 'Follow';
        document.querySelector(`.switch-button${num}`).classList.remove('following');

    }
}
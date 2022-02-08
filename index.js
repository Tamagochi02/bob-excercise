const hey = (message) => {
    message = message.trim()
    if(message.toUpperCase()==message && message[message.length-1]=="?" && /[a-zA-Z]/g.test(message))
        return "Calm down, I know what I'm doing!";

    if(message.toUpperCase()==message && /[a-zA-Z]/g.test(message))
        return 'Whoa, chill out!';

    if(message[message.length-1]=="?" )
        return 'Sure.';

    if(message=="")
        return 'Fine. Be that way!';

    return 'Whatever.';
}

module.exports = {
    hey
}
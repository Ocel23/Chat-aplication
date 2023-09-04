<h1>Chat aplication template with Chat Bot</h1>

<h2>Informations:</h2>
<p>I present to you my first post on my github. This is a template that the user can deploy on any website.</p>
<p>The application contains a config that the user can configure as desired. The application was created using React and NodeJS technologies, it only supports <strong>MongoDB</strong> so far.</p>
<p>You can find a sample application to try at <a href="#chat-aplication-tempalte-with-chat-bot">this link</a>.</p>

> [!WARNING]
> <strong>The code cannot be further modified without the consent of the owner.</strong> Only config.js and env files.<br>

<p>If you have any questions, feel free to write to my email or discord. I wish you a great use :yum:.</p>

<h3>Process</h3>

<ol>
    <li>Upload the Client and Server to your hosting services.</li>
    <li>Setup .env files variables</li>
    <li>Adjust the config for your needs.</li>
    <li>Lets go to installation!<li>
</ol>

<h3>Installation</h3>

<h5>Client<h5>

<p>Firts you need to install all depensies</p>

```
npm i

```

<p>Then only write</p>

```
npm start

```

<p>And it is all! Congratulations, we now have a client running!</p>

<h4>Server</h4>

<p>First you nedd to install all depensies</p>

```
npm i

```

<p>For first use our app we must write one command for setup our app (this command only write once)</p>

```
node index.js setup

```

<p>Then we must register for manage your app (this is how you can register every administrator of this application)</p>

```
node index.js register --email <your email> --password <your password>

```

<p>And it is all! Congratulations, we now have a server running!</p>

function showContent(type) {
    var content = document.getElementById('dynamic-content');
    content.innerHTML = ''; // Clear previous content

    if (type === 'social') {
        content.innerHTML = '<a href="https://mastodon.arch-linux.cz/@archos" class="flex-item"><i class="fab fa-mastodon"></i> Mastodon</a>'
                          + '<a href="https://pixelfed.cz/i/web/profile/441194050239729665" class="flex-item"><i class="fab fa-instagram"></i> Pixelfed</a>' 
                          + '<a href="https://twitter.com/archos_linux" class="flex-item"><i class="fab fa-twitter"></i> Twitter</a>'
                          + '<a href="https://www.facebook.com/zdendys75/" class="flex-item"><i class="fab fa-facebook-f"></i> Facebook</a>';
    } else if (type === 'opensource') {
        content.innerHTML = '<a href="https://git.arch-linux.cz/Archos" class="flex-item"><i class="fas fa-code-branch"></i> Gitea</a>'
                          + '<a href="https://arch-linux.cz" class="flex-item"><i class="fab fa-linux"></i> Web Arch Linux</a>'
                          + '<a href="https://keyoxide.org/8B4BFBDECF67A57B56CAAEEF73F17C5E85E9DE2C" class="flex-item"><i class="fas fa-key"></i> Keyoxide</a>';
    } else if (type === 'contact') {
        content.innerHTML = '<a href="https://matrix.to/#/@archos:mxchat.cz" class="flex-item"><i class="fas fa-comments"></i> Matrix</a>'
                          + '<a href="mailto:email@zkreml.cz" class="flex-item"><i class="fas fa-envelope"></i> Email</a>'
                          + '<a href="xmpp:archos@arch-linux.cz" class="flex-item" title="Pro použití tohoto kontaktu nainstalujte kompatibilní XMPP klient. Kontakt: archos@arch-linux.cz"><i class="fas fa-comment-dots"></i> XMPP</a>'
                          + '<a href="https://keys.openpgp.org/vks/v1/by-fingerprint/DB711DE3EA9FAAFB313AEE4CF736D5CD9CED44E8" class="flex-item"><i class="fas fa-user-secret"></i> GPG Key</a>';
    } else if (type === 'projects') {
        content.innerHTML = '<a href="https://finance.oscloud.cz/" class="flex-item"><i class="fas fa-chart-line"></i> Finance OSCloud</a>'
                          + '<a href="https://web.mxchat.cz" class="flex-item"><i class="fas fa-globe"></i> Web MXChat</a>'
                          + '<a href="https://mamutovo.cz" class="flex-item"><i class="fab fa-mastodon"></i> Mamutovo</a>';
    }
}
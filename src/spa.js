let all_a = document.querySelectorAll("a");
all_a.forEach((i, b) => {
    all_a[b].onclick = (e) => {
            if (all_a[b].getAttribute("target") !== "_blank"){
                e.preventDefault();
                let a_href = all_a[b].getAttribute("href");
                history.replaceState(null, "/"
                    , location.href.slice(-1) === "/"
                        ?  a_href
                        : a_href
                );
                fetch(a_href)
                .then(Response => Response.text())
                .then(Response => {
                let parser = new DOMParser();
                let pars = parser.parseFromString(Response, 'text/html');
                    document.querySelector("html").innerHTML = pars.querySelector("html").innerHTML;
                });
            }
    };
});

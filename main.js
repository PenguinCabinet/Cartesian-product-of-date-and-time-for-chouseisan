function make_output(date_text, times_text) {
    //const template_str = "19:00〜";

    const times_arr =
        times_text
            .split("\n")
            .filter((e) => e != "");

    if (times_arr.length == 0)
        return date_text;

    const date_arr =
        date_text
            .split("\n")
            .filter((e) => e != "");;

    let out_arr =
        date_arr.map(text => {
            let ret =
                times_arr
                    .map(e => {
                        return text + " " + e;
                    });

            return ret.join("\n");
        })


    return out_arr.join("\n");
}

function make_output_wrapper() {
    const out_text = make_output(
        document.getElementById("date_text").value,
        document.getElementById("times_text").value
    );
    document.getElementById("output_text").value = out_text;
}


["date_text", "times_text"]
    .forEach(e => {
        document.getElementById(e).addEventListener(
            'keydown',
            make_output_wrapper
        );
        document.getElementById(e).addEventListener(
            'change',
            make_output_wrapper
        );
    })

function output_text_copy() {
    navigator.clipboard.writeText(document.getElementById("output_text").value).then(
        () => {
        },
        () => {
        },
    );
}

document.getElementById("output_text").placeholder =
    make_output(
        document.getElementById("date_text").placeholder,
        document.getElementById("times_text").placeholder
    );

//make_output_wrapper();
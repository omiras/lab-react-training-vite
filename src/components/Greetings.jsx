
export default function Greetings({ children, lang }) {

    // JavaScript "normal", un objeto a modo de diccionario
    const greets = {
        "de": "Hallo",
        "fr": "Bonjour",
        "es": "Hola",
        "en": "Hello"
    }

    return (
        <div style={{
            border: "1px solid black"
        }}>
            {greets[lang]} {children}
        </div>
    );
}
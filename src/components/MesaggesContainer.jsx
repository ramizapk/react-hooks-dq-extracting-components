import MassagesText from "./MassagesText";
import { messages } from "../data";

function MesaggeContainer() {
    return (
        <section className="messages">
            <ul>
                {messages.map(message =>
                    <MassagesText type={message.type}
                        content={message.content}
                        letter={message.name.slice(0, 1)}
                    />

                )}
            </ul>
        </section>
    )
}

export default MesaggeContainer;
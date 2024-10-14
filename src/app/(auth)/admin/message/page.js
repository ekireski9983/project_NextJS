export default function Message() {
    const messages = [
    ];
    return (
        <>
            <div title="list of message" className="mt-20">List Of Messages</div>
            <table className="w-full border-collapse mt-5">
                <thead>
                    <tr>
                        <th className="border border-white-500 p-2">#No</th>
                        <th className="border border-white-300 p-2">Name</th>
                        <th className="border border-white-300 p-2">Email</th>
                        <th className="border border-white-300 p-2">Subject</th>
                        <th className="border border-white-300 p-2">Message</th>
                        <th className="border border-white-300 p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((msg) => (
                        <tr key={msg.id}>
                            <td className="border border-gray-300 p-2">{msg.no}</td>
                            <td className="border border-gray-300 p-2">{msg.name}</td>
                            <td className="border border-gray-300 p-2">{msg.email}</td>
                            <td className="border border-gray-300 p-2">{msg.subjet}</td>
                            <td className="border border-gray-300 p-2">{msg.message}</td>
                            <td className="border border-gray-300 p-2">{msg.action}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
  
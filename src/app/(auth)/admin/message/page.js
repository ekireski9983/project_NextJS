export default function Messages() {
  return (
    <div>
      <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-bold mb-4">List of Message</h2>
          <table class="min-w-full bg-white">
              <thead>
                  <tr>
                      <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">#No</th>
                      <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Name</th>
                      <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Email</th>
                      <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Subject</th>
                      <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Message</th>
                      <th class="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Action</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">1</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Jhon doe</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">jhondoe@mail.com</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Loremipsum</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">loremipsum loremipsum loremipsum</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                          <button class="bg-green-200 text-green-800 py-1 px-3 rounded">Balas</button>
                          <button class="bg-gray-200 text-gray-800 py-1 px-3 rounded">Arsipkan</button>
                      </td>
                  </tr>
                  <tr>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">2</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Jhon doe</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">jhondoe@mail.com</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Loremipsum</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">loremipsum loremipsum loremipsum</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                          <button class="bg-green-200 text-green-800 py-1 px-3 rounded">Balas</button>
                          <button class="bg-gray-200 text-gray-800 py-1 px-3 rounded">Arsipkan</button>
                      </td>
                  </tr>
                  <tr>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">3</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Jhon doe</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">jhondoe@mail.com</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Loremipsum</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">loremipsum loremipsum loremipsum</td>
                      <td class="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                          <button class="bg-green-200 text-green-800 py-1 px-3 rounded">Balas</button>
                          <button class="bg-gray-200 text-gray-800 py-1 px-3 rounded">Arsipkan</button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  );
}
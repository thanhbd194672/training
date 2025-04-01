import { http, HttpResponse} from 'msw';

export const handlers = [
  // Mock API login
  http.post('/api/login', async ({ request }) => {
    const { email, password } = await request.json() as { email: string; password: string };
    if (email === 'thanhcong@gmail.com' && password === '123456') {
      return HttpResponse.json(
        {
          access_token: "mocked_token_123456",
          user: { fullName: "Thanh Cong" }
        },
        { status: 200 }
      );
    } else {
      return HttpResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
  }),


  // Mock API lấy thông tin người dùng
  http.get('/user', () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),

  http.get('/api/absence-records', async ({ request }) => {
    console.log('Mock API called'); // Kiểm tra log này
    return HttpResponse.json([
      { id: "1b5f6a15-87d2-4d80-ac23-fa52581b3171", name: 'Maria', department: "BICT", reason:"Sick", long:"1 day", status:"Inprogress" },
      { id: "7e72e5fd-3f8f-4f22-a04f-b23aca9de129", name: 'Phong', department: "ngunhulon", reason:"No brain" , long:"1 month",status:"Approved"},
    ]);
  }),
];
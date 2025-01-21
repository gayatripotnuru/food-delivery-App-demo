package gayatri;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Servlet implementation class Loginservlet
 */
@WebServlet("/Loginservlet")
public class Loginservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Loginservlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String username=request.getParameter("uname");
		String password=request.getParameter("pwd");
		
		String defaultpassword="123";
		if (defaultpassword.equalsIgnoreCase(password)) 
		{
			response.getWriter().println
			        ("<!DOCTYPE html>\r\n"
					+ "<html lang=\"en\">\r\n"
					+ "<head>\r\n"
					+ "    <meta charset=\"UTF-8\">\r\n"
					+ "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n"
					+ "    <title>My Web Page</title> \r\n"
					+ "</head>\r\n"
					+ "<body>\r\n"
					+ "\r\n"
					+ "    <a href='home.html'>go to home</a>"
					+ "\r\n"
					+ "</body>\r\n"
					+ "</html>"
					);
		}
		
		else{response.getWriter().println("<!DOCTYPE html>\r\n"
				+ "<html lang=\"en\">\r\n"
				+ "<head>\r\n"
				+ "    <meta charset=\"UTF-8\">\r\n"
				+ "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n"
				+ "    <title>My Web Page</title> \r\n"
				+ "</head>\r\n"
				+ "<body>\r\n"
				+ "\r\n"
				+ "    <h1>Invalid password!</h1>\r\n"
				+ "\r\n"
				+ "</body>\r\n"
				+ "</html>");
		}
		
		
		
//		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

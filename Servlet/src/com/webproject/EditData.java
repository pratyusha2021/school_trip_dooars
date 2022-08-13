package com.webproject;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class EditData
 */
@WebServlet("/EditData")
public class EditData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EditData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setHeader("Access-Control-Allow-Origin", "*");
		//CORS POLICY -- ISSUE
		
		try {
			HashMap<Object, Object> Response = new HashMap<Object, Object>(); 
			
			String sl_no = request.getParameter("sl_no");
			String mobile_no = request.getParameter("mobile_no");
			String email_id = request.getParameter("email_id");
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/sakila","root","Doyel1200#");
			String sql = "UPDATE students set mobile_no = ? , email_id = ? where sl_no = ?";
			
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, mobile_no);
			ps.setString(2, email_id);
			ps.setString(3, sl_no);

			
			if (ps.executeUpdate() > 0) {
				Response.put("update", true);
			} else {
				Response.put("update", false);
			}
			
			Gson gson = new Gson();
			String jsonRESPONSE = gson.toJson(Response);
			
			response.getWriter().append(jsonRESPONSE);
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

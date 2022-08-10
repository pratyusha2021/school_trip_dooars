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
 * Servlet implementation class AddData
 */
@WebServlet("/AddData")
public class AddData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		try {
			HashMap<Object, Object> Response = new HashMap<Object, Object>();
			
			String name = request.getParameter("name");
			String classes = request.getParameter("classes");
			String roll_no = request.getParameter("roll_no");
			String mobile_no = request.getParameter("mobile_no");
			String email_id = request.getParameter("email_id");


			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/sakila","root","Doyel1200#");
			String sql = "INSERT INTO students (name, classes, roll_no,mobile_no, email_id) VALUES (?,?,?,?,?)";
			
			PreparedStatement ps = con.prepareStatement(sql);
			
			ps.setString(1, name);
			ps.setString(2, classes);
			ps.setString(3 ,roll_no);
			ps.setString(4, mobile_no);
			ps.setString(5, email_id);
	

			
			if (ps.executeUpdate() > 0) {
				Response.put("insert", true);
			} else {
				Response.put("insert", false);
			}
			
			Gson gson = new Gson();
			String JSONresponse = gson.toJson(Response);
			//CORS POLICY -- ISSUE
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.getWriter().append(JSONresponse);
			
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

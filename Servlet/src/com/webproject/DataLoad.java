package com.webproject;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;


/**
 * Servlet implementation class DataLoad
 */
@WebServlet("/DataLoad")
public class DataLoad extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public DataLoad() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HashMap<Object, Object> Response = new HashMap<Object, Object>();
		ArrayList<StudentPojo> Data = new ArrayList<StudentPojo>();
		
		try {
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/sakila","root","Doyel1200#");
			PreparedStatement ps = connection.prepareStatement("select * from students limit ?");
			ps.setInt(1, 30);
			ResultSet rs = ps.executeQuery();
			
			while (rs.next()) {
				StudentPojo newdata = new StudentPojo(rs.getInt("sl_no"), rs.getString("name"), rs.getString("classes"), rs.getString("roll_no"), rs.getString("mobile_no"),rs.getString("email_id"));
			
				Data.add(newdata);	
			} 
			Response.put("students",Data);
		} catch (Exception e) {
			e.printStackTrace();
		}
		Gson gson = new Gson();
		String jsonResponse = gson.toJson(Response);
		//CORS POLICY -- ISSUE
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().append(jsonResponse);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

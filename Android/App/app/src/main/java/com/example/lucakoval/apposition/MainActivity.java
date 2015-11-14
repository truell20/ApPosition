package com.example.lucakoval.apposition;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.content_main);

        Button signInButton = (Button) findViewById(R.id.signInButton);

        // When button is clicked, save email and password and launch home tab
        signInButton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                EditText emailInput = (EditText) findViewById(R.id.emailInput);
                String email = emailInput.getText().toString();

                EditText passwordInput = (EditText) findViewById(R.id.passwordInput);
                String password = passwordInput.getText().toString();

                SharedPreferences settings = getSharedPreferences(getString(R.string.preferencesFileKey), Context.MODE_PRIVATE);
                SharedPreferences.Editor editor = settings.edit();
                editor.putString(getString(R.string.emailKey), email);
                editor.putString(getString(R.string.passwordKey), password);
                editor.commit();

                Intent i = new Intent(getApplicationContext(), Home.class);
                startActivity(i);
            }
        });
     }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}

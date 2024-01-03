package com.kuo;

import java.net.URI;

import com.facebook.react.ReactActivity;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "kuo";
  }

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
    // super.onCreate(savedInstanceState);
    // setContentView(R.layout.activity_main);
    // final ViewPager viewPager = (ViewPager) findViewById(R.id.viewpager);
    // CategoryAdapter adapter = new CategoryAdapter(this, getSupportFragementManager());
    // viewPager.setAdapter(adapter);
    // TabLayout tabLayout = (TabLayout) findViewById(R.id.tabs);
    // tabLayout.setupWithViewPager(viewPager);

    // FirebaseDynamicLinks.getInstance().getDynamicLink(getIntent())
    //     .addOnSuccessListener(this, new OnSuccessListener<PendingDynamicLinkData>() {
    //       @Override
    //       public void onSuccess(PendingDynamicLinkData pendingDynamicLinkData) {
    //         // Get deep link from result (may be null if no link is found)
    //         URI deepLink = null;
    //         if (pendingDynamicLinkData != null) {
    //           deepLink = pendingDynamicLinkData.getLink();
    //         }

    //         // Handle the deep link. For example, open the linked
    //         // content, or apply promotional credit to the user's
    //         // account.
    //         // ...
    //         if (deepLink != null) {
    //           Log.i(MainActivity, "here is the deep link url:\n" + deepLink.toString());
    //         }
    //         // ...
    //       }
    //     }).addOnFailureListener(this, new OnFailureListener() {
    //       @Override
    //       public void onFailure(@NonNull Exception e) {
    //         Log.w(TAG, "getDynamicLink:onFailure", e);
    //       }
    //     });
  }
}

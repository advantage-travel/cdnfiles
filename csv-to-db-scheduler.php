<?php
/*
Plugin Name: CSV to Database Scheduler
Description: A plugin to read a CSV file from a URL and insert its content into a WordPress database table every minute.
Version: 1.0
Author: Haider
*/

// Function to fetch the CSV file from the URL and insert data into the database table
function csv_to_db_insert_data() {
    global $wpdb;
   
    $delete_result = $wpdb->query("delete from Temp_WGAMemberAccounts;");
    if ($delete_result === false) {
        // Handle error
        echo "Error: " . $wpdb->last_error;
    } else {
        echo "All records deleted successfully.";
    }

    $table_name =  'Temp_WGAMemberAccounts';
    $csv_url = 'https://dev-accounts.atclubs.com/WGAMemberData.csv'; // URL of the CSV file

    if (defined('WP_DEBUG_LOG') && WP_DEBUG_LOG) {
        error_log('CSV to DB: Starting data import.');
    }

    $response = wp_remote_get($csv_url);
    if (is_wp_error($response)) {
        error_log('CSV to DB: Error fetching the file - ' . $response->get_error_message());
        return;
    }

    $csv_data = wp_remote_retrieve_body($response);
    $lines = explode("\n", $csv_data);

    foreach ($lines as $line) {
        $data = str_getcsv($line);
        if (!empty($data) && count($data) >= 2) {
            $wpdb->insert(
                $table_name,
                array(
                    'MemberAccountID' => sanitize_text_field($data[0]),
                    'PersonID' => sanitize_text_field($data[1]),
                    'AddressID' => sanitize_text_field($data[2]),
                    'AccountStatus' => sanitize_text_field($data[3]),
                    'DateofSale' => sanitize_text_field($data[4]),
                    'PurchasePrice' => sanitize_text_field($data[5]),
                    'DuesPaidThruDate' => sanitize_text_field($data[6]),
                    'DuesBillingType' => sanitize_text_field($data[7]),
                    'DuesBillingMethod' => sanitize_text_field($data[8]),
                    'DuesDiscountCategory' => sanitize_text_field($data[9]),
                    'DuesCurrentAmount' => sanitize_text_field($data[10]),
                    'BillingDiscount' => sanitize_text_field($data[11]),
                    'DuesAmount' => sanitize_text_field($data[12]),
                    'GlobalCondoAnnualLimit' => sanitize_text_field($data[13]),
                    'SubStatus' => sanitize_text_field($data[14]),
                    'AnnualPoints' => sanitize_text_field($data[15]),
                    'DiscountPoints' => sanitize_text_field($data[16]),
                    'AnnualPointsRental' => sanitize_text_field($data[17]),
                    'UseYearMonth' => sanitize_text_field($data[18]),
                    'ClubWeekSize' => sanitize_text_field($data[19]),
                    'AnnualSavingsDollars' => sanitize_text_field($data[20]),
                    'WeekorPoints' => sanitize_text_field($data[21]),
                    'IsOwnerClubs' => sanitize_text_field($data[22]),
                    'IsDNC' => sanitize_text_field($data[23]),
                    'IsOption' => sanitize_text_field($data[24]),
                    'GlobalCondoLifeLimit' => sanitize_text_field($data[25]),
                    'AgentName' => sanitize_text_field($data[26]),
                    'ClubName' => sanitize_text_field($data[27]),
                    'MembershipTermName' => sanitize_text_field($data[28]),
                    'MembershipName' => sanitize_text_field($data[29]),
                    'PrimaryMember' => sanitize_text_field($data[30]),
                    'FirstName' => sanitize_text_field($data[31]),
                    'MiddleName' => sanitize_text_field($data[32]),
                    'LastName' => sanitize_text_field($data[33]),
                    'Birthday' => sanitize_text_field($data[34]),
                    'Inactive' => sanitize_text_field($data[35]),
                    'Address1' => sanitize_text_field($data[36]),
                    'Address2' => sanitize_text_field($data[37]),
                    'City' => sanitize_text_field($data[38]),
                    'StateProvince' => sanitize_text_field($data[39]),
                    'PostalCode' => sanitize_text_field($data[40]),
                    'Country' => sanitize_text_field($data[41]),
                    'PrimaryAddress' => sanitize_text_field($data[42]),
                    'AddressInvalid' => sanitize_text_field($data[43]),
                    'Email' => sanitize_text_field($data[44]),
                    'InvalidEmail' => sanitize_text_field($data[45]),
                    'Phone1' => sanitize_text_field($data[46]),
                    'Phone2' => sanitize_text_field($data[47]),
                    'Phone3' => sanitize_text_field($data[48]),
                    'OverrideActivation' => sanitize_text_field($data[49]),
                    'OverrideAmount' => sanitize_text_field($data[50]),
                    'OverrideDescription' => sanitize_text_field($data[51]),
                    'TempLoginLink' => sanitize_text_field($data[52]),
                    'Eligible_Disount' => sanitize_text_field($data[53]),
                    'MshipDuesLow' => sanitize_text_field($data[54]),
                    'MshipDuesHigh' => sanitize_text_field($data[55]),
                    'EFT_CC_Issue' => sanitize_text_field($data[56]),
                    'EFT_CK_Issue' => sanitize_text_field($data[57]),
                    'Level1LastLogin' => sanitize_text_field($data[58]),
                    'ClubID' => sanitize_text_field($data[59]),
                    'CriticalInformation' => sanitize_text_field($data[60]),
                    'StateCode' => sanitize_text_field($data[61]),
                    'InternalID' => sanitize_text_field($data[62]),
                    'DateCreated' => sanitize_text_field($data[63]),
                    'DB_Operation' => sanitize_text_field($data[64])
                )
            );
            if (defined('WP_DEBUG_LOG') && WP_DEBUG_LOG) {
                error_log('CSV to DB: Inserted row - ' . implode(', ', $data));
            }
        }
    }
    
    
    $update_result = $wpdb->query("CALL DeleteWGAMembers()"); 

    if ($update_result === false) {
        // Handle error
        echo "Error: " . $wpdb->last_error;
    } else {
        echo "DeleteWGAMembers WGAMembers executed successfully.";
    }

    $add_result = $wpdb->query("CALL AddNewWGAMembers()");
    if ($add_result === false) {
        // Handle error
        echo "Error: " . $wpdb->last_error;
    } else {
        echo "AddNewWGAMembers executed successfully.";
    }
   
    if (defined('WP_DEBUG_LOG') && WP_DEBUG_LOG) {
        error_log('CSV to DB: Data import completed.');
    }
}

// Schedule the import process to run every minute
function csv_to_db_schedule_event() {
    if (!wp_next_scheduled('csv_to_db_minute_event')) {
        wp_schedule_event(time(), 'one_minute', 'csv_to_db_minute_event');
        if (defined('WP_DEBUG_LOG') && WP_DEBUG_LOG) {
            error_log('CSV to DB: Scheduled event created.');
        }
    }

      // Add the check here
      if (wp_next_scheduled('csv_to_db_minute_event')) {
        error_log('CSV to DB: Event is scheduled.');
    } else {
        error_log('CSV to DB: Event is not scheduled.');
    }
}
add_action('wp', 'csv_to_db_schedule_event');

function csv_to_db_add_cron_interval($schedules) {
    $schedules['one_minute'] = array(
        'interval' => 60, // 1 minute in seconds
        'display' => __('Every 1 Minute')
    );
    if (defined('WP_DEBUG_LOG') && WP_DEBUG_LOG) {
        error_log('CSV to DB: Custom cron interval added.');
    }
    return $schedules;
}
add_filter('cron_schedules', 'csv_to_db_add_cron_interval');

add_action('csv_to_db_minute_event', 'csv_to_db_insert_data');

// Clear the scheduled event on plugin deactivation
function csv_to_db_deactivate() {
    $timestamp = wp_next_scheduled('csv_to_db_minute_event');
    wp_unschedule_event($timestamp, 'csv_to_db_minute_event');
    if (defined('WP_DEBUG_LOG') && WP_DEBUG_LOG) {
        error_log('CSV to DB: Scheduled event cleared.');
    }
}
register_deactivation_hook(__FILE__, 'csv_to_db_deactivate');

// Add a manual trigger for the import process
function csv_to_db_admin_menu() {
    add_menu_page(
        'CSV to Database',
        'CSV to Database',
        'manage_options',
        'csv-to-db',
        'csv_to_db_admin_page'
    );
}
add_action('admin_menu', 'csv_to_db_admin_menu');

function csv_to_db_admin_page() {
    ?>
    <div class="wrap">
        <h1>CSV to Database</h1>
        <form method="post" action="">
            <input type="hidden" name="csv_to_db_import" value="1">
            <?php submit_button('Import CSV'); ?>
        </form>
    </div>
    <?php
    if (isset($_POST['csv_to_db_import'])) {
        csv_to_db_insert_data();
        echo '<div class="updated"><p>CSV data imported successfully!</p></div>';
    }
}
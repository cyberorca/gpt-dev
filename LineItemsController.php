<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Google\AdsApi\AdManager\AdManagerSessionBuilder;
use Google\AdsApi\AdManager\Util\v202111\StatementBuilder as V202111StatementBuilder;
use Google\AdsApi\AdManager\v202111\AdUnitTargeting as V202111AdUnitTargeting;
use Google\AdsApi\AdManager\v202111\CostType as V202111CostType;
use Google\AdsApi\AdManager\v202111\CreativePlaceholder;
use Google\AdsApi\AdManager\v202111\CreativeRotationType;
use Google\AdsApi\AdManager\v202111\CustomCriteria as V202111CustomCriteria;
use Google\AdsApi\AdManager\v202111\CustomCriteriaSet as V202111CustomCriteriaSet;
use Google\AdsApi\AdManager\v202111\Goal;
use Google\AdsApi\AdManager\v202111\GoalType;
use Google\AdsApi\AdManager\v202111\InventoryTargeting as V202111InventoryTargeting;
use Google\AdsApi\AdManager\v202111\LineItem;
use Google\AdsApi\AdManager\v202111\ServiceFactory as V202111ServiceFactory;
use Google\AdsApi\AdManager\v202111\LineItemCreativeAssociation;
use Google\AdsApi\AdManager\v202111\LineItemType;
use Google\AdsApi\AdManager\v202111\Money as V202111Money;
use Google\AdsApi\AdManager\v202111\ResumeLineItems;
use Google\AdsApi\AdManager\v202111\Size;
use Google\AdsApi\AdManager\v202111\StartDateTimeType;
use Google\AdsApi\AdManager\v202111\Targeting as V202111Targeting;
use Google\AdsApi\AdManager\v202111\UnitType;
use Google\AdsApi\Common\OAuth2TokenBuilder;
use SebastianBergmann\Type\FalseType;

class LineItemsController extends Controller
{
    private $oAuth2Credential;
    private $session;
    private $serviceFactory;
    private $proceed;
    private $creative_list;
 
    public function __construct()
    {
        $this->oAuth2Credential = (new OAuth2TokenBuilder())
            ->fromFile()
            ->build();

        $this->session = (new AdManagerSessionBuilder())->fromFile()
            ->withOAuth2Credential($this->oAuth2Credential)
            ->build();

        $this->serviceFactory = new V202111ServiceFactory();

        $this->placementId = '35505050';

        $this->creative_list = [
            "appnexus" => 
                [ 
                    "sizes" => [
                        "300x600" => 138330910237, 
                        "300x250" => 138330535638,
                        "320x100" => 138330500465,
                        "320x50" => 138330500468,
                        "970x90" => 138330911014,
                        "728x90" => 138330500201,
                        "970x250" => 138330910243 
                    ],
                    "keyId" => 12172896
                ]
            
            ,
    
            "criteo" => 
                [
                    "sizes" => [
                        "300x600" => 138330500204,
                        "300x250" => 138330500207,
                        "320x100" => 138330500210,
                        "320x50" => 138330500213,
                        "970x90" => 138330906184,
                        "728x90" => 138330500474,
                        "970x250" => 138330500477
                    ],
                    "keyId" => 9695414
                ]
            
            ,
            "emx_digital" => 
                [
                    "sizes" => [
                        "300x600" => 138330500480,
                        "300x250" => 138330500483,
                        "320x100" => 138330500486,
                        "320x50" => 138330485178,
                        "970x90" => 138330500489,
                        "728x90" => 138330500492,
                        "970x250" => 138330500495
                    ],
                    "keyId" => 12175959
                ]
      
            ,
            "gamma" => 
                [
                    "sizes" => [
                        "300x600" => 138330500216,
                        "300x250" => 138330910246,
                        "320x100" => 138330910249,
                        "320x50" => 138330500498,
                        "970x90" => 138330911017,
                        "728x90" => 138330500501,
                        "970x250" => 138330500504
                    ],
                    "keyId" => 12159029
                ]
            
            ,
            "innity" =>  
                [    
                    "sizes" => [
                        "300x600" => 138330500507,
                        "300x250" => 138330500222,
                        "320x100" => 138330536217,
                        "320x50" => 138330911020,
                        "970x90" => 138330500513,
                        "728x90" => 138330500225,
                        "970x250" => 138330500228
                    ],
                    "keyId" => 12159032
                ]
            
            ,
            "oftmedia"  => 
                [
                    "sizes" => [
                        "300x600" => 138330500516,
                        "300x250" => 138330910255,
                        "320x100" => 138330500231,
                        "320x50" => 138330856987,
                        "970x90" => 138330533580,
                        "728x90" => 138330500519,
                        "970x250" => 138330500522
                    ],
                    "keyId" => 12175962
                ]
            
            ,
            "pubmatic" =>  
                [
                    "sizes" => [
                        "300x600" => 138330535641,
                        "300x250" => 138330500243,
                        "320x100" => 138330500246,
                        "320x50" => 138330500525,
                        "970x90" => 138330500528,
                        "728x90" => 138330500531,
                        "970x250" => 138330500534
                    ],
                    "keyId" => 12159035
    
                ]
            
            ,
            "rtbhouse" => 
                [
                    "sizes" => [
                        "300x600" => 138330500537,
                        "300x250" => 138330533583,
                        "320x100" => 138330500540,
                        "320x50" => 138330907447,
                        "970x90" => 138330500543,
                        "728x90" => 138330500552,
                        "970x250" => 138330500555
                    ],
                    "keyId" => 12175965
                ]
            ,
            "spotx" =>  
                [
                    "sizes" => [
                        "300x600" => 138330911023,
                        "300x250" => 138330500261,
                        "320x100" => 138330500561,
                        "320x50" => 138330500564,
                        "970x90" => 138330500567,
                        "728x90" => 138330500573,
                        "970x250" => 138330500579
                    ],
                    "keyId" => 12159038
                ]
            
            ,
            "teads" => 
                [
                    "sizes" => [
                        "300x600" => 138330500267,
                        "300x250" => 138330500582,
                        "320x100" => 138330500585,
                        "320x50" => 138330500591,
                        "970x90" => 138330906193,
                        "728x90" => 138330500594,
                        "970x250" => 138330500597
                    ],
                    "keyId" => 12159041
                ]
            ,
            "grid" => 
                [
                    "sizes" => [
                        "300x600" => 138347307750,
                        "300x250" => 138347729386,
                        "320x100" => 138347306964,
                        "320x50" =>  138347294378,
                        "970x90" =>  138347308035,
                        "728x90" =>  138347729593,
                        "970x250" => 138347729851,
                    ],
                    "keyId" => 12425034
                ],
            "adnuntius" => 
                [
                    "sizes" => [
                        "300x600" => 138350041254,
                        "300x250" => 138350403265,
                        "320x100" => 138350403202,
                        "320x50" => 138350403169,
                        "970x90" => 138350010749,
                        "728x90" => 138350403124,
                        "970x250" => 138350403403,
                    ],
                    "keyId" => 12474991 
                ],
            "smaato" => 
                [
                    "sizes" => [
                        "300x600" => 138351114827,
                        "300x250" => 138351151719,
                        "320x100" => 138351151704,
                        "320x50" => 138351151695,
                        "970x90" => 138351114836,
                        "728x90" => 138351151698,
                        "970x250" => 138351151731,
                    ],
                    "keyId" => 12509439 
                ],
            "rubicon" => 
                    [
                        "sizes" => [
                            "300x600" => 138354095262,
                            "300x250" => 138354097863,
                            "320x100" => 138354076604,
                            "320x50" => 138354454453,
                            "970x90" => 138354098646,
                            "728x90" => 138354098187,
                            "970x250" => 138354097959,
                        ],
                        "keyId" => 12560580 /** kay-values */
                    ],
            "ix" => 
                    [
                        "sizes" => [
                            "300x600" => 138356283181,
                            "300x250" => 138356283010,
                            "320x100" => 138356283649,
                            "320x50" =>  138355953708,
                            "970x90" =>  138355922315,
                            "728x90" =>  138355922135,
                            "970x250" => 138355921691,
                        ],
                        "keyId" => 12578120 /** kay-values */
                    ],
            "unruly" => 
                    [
                        "sizes" => [
                            "300x600" => 138378029535,
                            "300x250" => 138378037878,
                            "320x100" => 138378029319,
                            "320x50" =>  138378015587,
                            "970x90" =>  138378503491,
                            "728x90" =>  138378040098,
                            "970x250" => 138378503650,
                        ],
                        "keyId" => 12914681 /** kay-values */
                    ],
            "medianet" => 
                    [
                        "sizes" => [
                            "300x600" => 138381900546,
                            "300x250" => 138381900375,
                            "320x100" => 138381901122,
                            "320x50" =>  138382372072,
                            "970x90" =>  138382363471,
                            "728x90" =>  138381901812,
                            "970x250" => 138382373104,
                        ],
                        "keyId" => 13028359 /** kay-values */
                    ],
            "SmartAdServer" => 
                    [
                        "sizes" => [
                            "300x600" => 138387411332,
                            "300x250" => 138387470142,
                            "320x100" => 138387469602,
                            "320x50" =>  138387470367,
                            "970x90" =>  138387411386,
                            "728x90" =>  138387411437,
                            "970x250" => 138387961249,
                        ],
                        "keyId" => 13183085 /** kay-values */
                    ],
            "openx" => 
                    [
                        "sizes" => [
                            "300x600" => 138391670047,
                            "300x250" => 138391179930,
                            "320x100" => 138391179606,
                            "320x50" =>  138391180065,
                            "970x90" =>  138391180290,
                            "728x90" =>  138391102919,
                            "970x250" => 138391103000,
                        ],
                        "keyId" => 13289543 /** kay-values */
                    ],
            "jixie" => 
                    [
                        "sizes" => [
                            "300x600" => 138392613600,
                            "300x250" => 138392613591,
                            "320x100" => 138392613192,
                            "320x50" => 138392612952,
                            "970x90" => 138392613255,
                            "728x90" => 138392613594,
                            "970x250" => 138392613597,
                        ],
                        "keyId" => 13318660 /** kay-values */
                    ],
        ];

        //$this->proceed = false;
    }

    public function index()
    {
        // $orderService = $this->serviceFactory->createOrderService($this->session);
        // $statementBuilder = new V202111StatementBuilder();
        // $pageSize = $statementBuilder::SUGGESTED_PAGE_LIMIT;
        // $statementBuilder = $statementBuilder->where("name LIKE 'KLY Prebid%' AND isArchived = 'false' ")
        //         ->orderBy('id ASC')
        //         ->limit($pageSize);
        // $page = $orderService->getOrdersByStatement(
        //     $statementBuilder->toStatement()
        // );

        // // Print out some information for each order.
        // if ($page->getResults() !== null) {
        //     dd($page->getResults());
        // }

        return view('gam.lineitems.index');
    }

    public function create(Request $request)
    {
        $this->proceed = $request->optionsRadios === "true" ? true : false;
        $orderId =  $request->orderId;
        $bidder_code =  $request->bidderCode;
       
        //$orderId = '2875250621'; 
        //$bidder_code = 'rubicon';
        
        //$this->lineitemsGenerator($orderId, $bidder_code);
        // $this->lineitemsGeneratorAdded($orderId, $bidder_code);
        //$this->lineitemsGeneratorCheck($orderId, $bidder_code);
        $this->lineitemUpdaterTargeting();
        
    }
    protected function lineitemUpdaterTargeting($orderId)
    {
        $lineItemService = $this->serviceFactory->createLineItemService($this->session);
		$statementBuilder = new V202111StatementBuilder();
		$statementBuilder->Where('orderId = :orderId AND isArchived != 1');
		$statementBuilder->OrderBy('id ASC');
		$statementBuilder->Limit(351);
		$statementBuilder->WithBindVariableValue('orderId', $orderId);

		$page = $lineItemService->getLineItemsByStatement(
			$statementBuilder->toStatement()
		);
			
		$lineItems = $page->getResults();
			
		foreach ($lineItems as $updatedLineItem) {
            if( $this->proceed ){       
				$this->updateLineItem($lineItemService,$updatedLineItem,$strPrice_rate,$bidder_code);
            } 
		}
    }

    protected function updateLineItem(
        $lineItemService,
        $updatedLineItem,
		$strPrice, 
		$bCode
    ) 
    {
		
		$micronPrice = floatval($strPrice) * 1000000;
        $lineitemSubject = 'KLY Prebid Header Bidding - ' . $bCode . ' - $' . $strPrice;
		$keyId = $this->creative_list[$bCode]["keyId"];

        $valId = $this->getKey($keyId ,$strPrice);
	
        $statementBuilder = new V202111StatementBuilder();
        $statementBuilder->Where('id = :id');
        $statementBuilder->OrderBy('id ASC');
        $statementBuilder->Limit(1);
        $statementBuilder->WithBindVariableValue('id', $updatedLineItem->getId());
        
        // Create a statement to only select a single line item by ID.
        
		$page = $lineItemService->getLineItemsByStatement(
            $statementBuilder->toStatement()
        );

        $lineItem = $page->getResults()[0];
		
		$lineItem->setName($lineitemSubject);
		
		//create custom targetting
        $customCriteriaChild = new V202111CustomCriteria();
        $customCriteriaChild->setKeyId($keyId); // key targetting IDs
        $customCriteriaChild->setValueIds([$valId]); // values targetting IDs
        $customCriteriaChild->setOperator('IS');

        $customTargettingChild = new V202111CustomCriteriaSet();
        $customTargettingChild->setLogicalOperator('AND');
        $customTargettingChild->setChildren([$customCriteriaChild]);

        $customTargetting = new V202111CustomCriteriaSet();
        $customTargetting->setLogicalOperator('OR');
        $customTargetting->setChildren([$customTargettingChild]);
		
		$adunitTargeting = new V202111AdUnitTargeting();
        $adunitTargeting->setAdunitId(35505050);
		
		// Create inventory targeting.
        $inventoryTargeting = new V202111InventoryTargeting();
        $inventoryTargeting->setTargetedAdUnits([$adunitTargeting]);
		
		// Create targeting.
        $targeting = new V202111Targeting();
		$targeting->setInventoryTargeting($inventoryTargeting);
        $targeting->setCustomTargeting($customTargetting);
		
		$lineItem->setTargeting($targeting);
		$lineItem->setCostType(V202111CostType::CPM);
        $lineItem->setCostPerUnit(new V202111Money('USD', $micronPrice));
		
        // Update the line item on the server.
		try {
            $results = $lineItemService->updatelineItems([$lineItem]);
			$statementBuilder->removeLimitAndOffset();
			// Create and perform action.
            $action = new ResumeLineItems();
            $resultResume = $lineItemService->performlineItemAction(
                $action,
                $statementBuilder->toStatement()
            );

            if ($resultResume !== null) {
				 echo $lineitemSubject . " | " . $results[0]->getId() . " Resume !<br/>";
            } else {
                printf("No line items were paused.%s", PHP_EOL);
            }
			
           
        } catch (\Exception $e) {
			echo "ERROR! <br/>" . $e;
            return false;
        }
		 
    }
    public function lineitemsGenerator($orderId, $bidder_code)
    {
        $price_rate = 2.75;//0.20;
			for($i=255;$i<351;$i++){
                echo $i+1 . "<br/>";
                $strPrice_rate = strval($price_rate);
                $dotPos_rate = strpos($strPrice_rate,".");
                if($i > 279 ){
					$price_diff = 0.1;
					if(strlen($strPrice_rate) < 4){
						$strPrice_rate .= "";
					}
					if($dotPos_rate == ''){
						$strPrice_rate .= ".0";
					}
				}else{
					$price_diff = 0.01;
					if(strlen($strPrice_rate) < 4 && strlen($strPrice_rate) > 1){
						$strPrice_rate .= "0";
					}
					if($dotPos_rate == ''){
						$strPrice_rate .= ".00";
					}
				}

                echo $strPrice_rate . " => " . $dotPos_rate . " => " . strlen($strPrice_rate) . "<br/>";
                // echo $orderId . " => " . $strPrice_rate . " => " . $bidder_code . "<br/>";
                // echo "<pre>";
                // print_r($this->creative_list[$bidder_code]);
                // echo "</pre>";


                if($this->proceed ){
                    if(($lineitemId = $this->generateLineitem($orderId, $strPrice_rate, $bidder_code)) !== FALSE)
                    $this->createLicas($lineitemId, $this->creative_list[$bidder_code]);
                }
                $price_rate += $price_diff;
            }
    }

    public function lineitemsGeneratorAdded($orderId, $bidder_code)
    {
        echo $orderId . " => " . $bidder_code . "<br/>";
        echo "<pre>";
        print_r($this->creative_list[$bidder_code]["keyId"]);
        echo "</pre>";
        
        $price_rate = 0.02;
        for($i=0;$i<18;$i++){
                echo $i+1 . "<br/>";
                $strPrice_rate = strval($price_rate);
                $dotPos_rate = strpos($strPrice_rate,".");
                if($i > 279 ){
					$price_diff = 0.1;
					if(strlen($strPrice_rate) < 4){
						$strPrice_rate .= "";
					}
					if($dotPos_rate == ''){
						$strPrice_rate .= ".0";
					}
				}else{
					$price_diff = 0.01;
					if(strlen($strPrice_rate) < 4 && strlen($strPrice_rate) > 1){
						$strPrice_rate .= "0";
					}
					if($dotPos_rate == ''){
						$strPrice_rate .= ".00";
					}
				}

                echo $strPrice_rate . " => " . $dotPos_rate . " => " . strlen($strPrice_rate) . "<br/>";
               
                if($this->proceed ){
                    if(($lineitemId = $this->generateLineitem($orderId, $strPrice_rate, $bidder_code)) !== FALSE)
                    $this->createLicas($lineitemId, $this->creative_list[$bidder_code]);
                }
                $price_rate += $price_diff;
            }

    }

    public function aneh($orderId, $bidder_code)
    {
        echo $orderId . " => " . $bidder_code . "<br/>";
        echo "<pre>";
        print_r($this->creative_list[$bidder_code]);
        echo "</pre>";
        
        $lineItemService = $this->serviceFactory->createLineItemService($this->session);
        $lineitemName = 'KLY Prebid Header Bidding - grid - $1.';
        echo "name LIKE '%{$lineitemName}' <br/>";
        $statementBuilder = new V202111StatementBuilder();
        $statementBuilder->Where("name LIKE '%{$lineitemName}%'")
        ->orderBy('id ASC')
        ->limit(1);
        
        $page = $lineItemService->getLineItemsByStatement(
            $statementBuilder->toStatement()
        );
   
        if ($page->getResults() !== null) {
            foreach ($page->getResults() as $updatedLineItem) {
                printf(
                    "%d) Line item with ID %d and name '%s' was found.%s",
                    $i++,
                    $updatedLineItem->getId(),
                    $updatedLineItem->getName(),
                    PHP_EOL
                );
            }
        }

    }

    function lineitemsGeneratorCheck($orderId, $bidder_code){
        // $price_rate = 1.1;
        // for($i=0;$i<20;$i++){
        //     $strPrice_rate = strval($price_rate);
        //     $dotPos_rate = strpos($strPrice_rate,".");
        //     $price_diff = 0.1;
                   
		// 	if(strlen($strPrice_rate) < 4 && strlen($strPrice_rate) > 1){
		// 	    $strPrice_rate .= "";
		// 	}
			
        //     echo $i . " : " . $strPrice_rate . " => " . $dotPos_rate . " => " . strlen($strPrice_rate) . "<br/>";

        //     if( $this->proceed){
        //         $lineItemService = $this->serviceFactory->createLineItemService($this->session);
        //         $lineitemName = 'KLY Prebid Header Bidding - ' . $bidder_code . ' - $' . $strPrice_rate;
        //         echo "name LIKE '%{$lineitemName}%' <br/>";
        //         $statementBuilder = new V202111StatementBuilder();
        //         $statementBuilder->Where("name LIKE '%{$lineitemName}%'")
        //         ->orderBy('id ASC')
        //         ->limit(1);
                
        //         $page = $lineItemService->getLineItemsByStatement(
        //             $statementBuilder->toStatement()
        //         );
                    
        //         if ($page->getResults() !== null) {
        //             foreach ($page->getResults() as $updatedLineItem) {
                    
        //                 echo $updatedLineItem->getId() . " | " . $updatedLineItem->getName() . "<br/>";
                            
                        
        //                     $this->updateLineItem($lineItemService, $updatedLineItem, $strPrice_rate, $bidder_code);
                        
        //             }
        //         }
        //     }
        //     $price_rate += $price_diff;   
        // }

        $price_rate = 4;
        for($i=0;$i<7;$i++){
            $strPrice_rate = strval($price_rate);
            $dotPos_rate = strpos($strPrice_rate,".");
            $price_diff = 1;
                   
			$strPrice_rate .= ".";
			
			
            echo $i . " : " . $strPrice_rate . " => " . $dotPos_rate . " => " . strlen($strPrice_rate) . "<br/>";

            if( $this->proceed){
                $lineItemService = $this->serviceFactory->createLineItemService($this->session);
                $lineitemName = 'KLY Prebid Header Bidding - ' . $bidder_code . ' - $' . $strPrice_rate;
                echo "name LIKE '%{$lineitemName}%' <br/>";
                $statementBuilder = new V202111StatementBuilder();
                $statementBuilder->Where("name LIKE '%{$lineitemName}%'")
                ->orderBy('id ASC')
                ->limit(1);
                
                $page = $lineItemService->getLineItemsByStatement(
                    $statementBuilder->toStatement()
                );
                    
                if ($page->getResults() !== null) {
                    foreach ($page->getResults() as $updatedLineItem) {
                    
                        echo $updatedLineItem->getId() . " | " . $updatedLineItem->getName() . "<br/>";
                            
                        
                            $this->updateLineItem($lineItemService, $updatedLineItem, $strPrice_rate, $bidder_code);
                        
                    }
                }
            }
            $price_rate += $price_diff;   
        }




            
            

                // if($i > 98 && $i < 118 ){
                //     $price_rate = 1.1;
                //     $strPrice_rate = strval($price_rate);
                //     $dotPos_rate = strpos($strPrice_rate,".");
				// 	$price_diff = 0.1;
                //     $price_rate += $price_diff;
				// 	if(strlen($strPrice_rate) < 4){
				// 		$strPrice_rate .= "";
				// 	}
				// 	if($dotPos_rate == ''){
				// 		$strPrice_rate .= ".00";
				// 	}
				// }
                // if($i > 117 ){
                //     $price_rate = 4;
                //     $strPrice_rate = strval($price_rate);
                //     $dotPos_rate = strpos($strPrice_rate,".");
				// 	$price_diff = 1;
                //     $price_rate += $price_diff;
				// 	if(strlen($strPrice_rate) < 4){
				// 		$strPrice_rate .= "";
				// 	}
				// 	if($dotPos_rate == ''){
				// 		$strPrice_rate .= ".0";
				// 	}
				// }

    }

    protected function generateLineitem($orderId, $strPrice, $bCode)
    {
        $lineItemService = $this->serviceFactory->createLineItemService($this->session);
        $micronPrice = floatval($strPrice) * 1000000;
        $lineitemSubject = 'KLY Prebid Header Bidding - ' . $bCode . ' - $' . $strPrice;
        $keyId = $this->creative_list[$bCode]["keyId"];
        $valId = $this->getKey($keyId ,$strPrice);

        $adunitTargeting = new V202111AdUnitTargeting();
        $adunitTargeting->setAdunitId(35505050);

        // Create inventory targeting.
        $inventoryTargeting = new V202111InventoryTargeting();
        $inventoryTargeting->setTargetedAdUnits([$adunitTargeting]);

        //create custom targetting
        $customCriteriaChild = new V202111CustomCriteria();
        $customCriteriaChild->setKeyId($keyId); // key targetting IDs
        $customCriteriaChild->setValueIds([$valId]); // values targetting IDs
        $customCriteriaChild->setOperator('IS');

        $customTargettingChild = new V202111CustomCriteriaSet();
        $customTargettingChild->setLogicalOperator('AND');
        $customTargettingChild->setChildren([$customCriteriaChild]);

        $customTargetting = new V202111CustomCriteriaSet();
        $customTargetting->setLogicalOperator('OR');
        $customTargetting->setChildren([$customTargettingChild]);

        // Create targeting.
        $targeting = new V202111Targeting();
        $targeting->setInventoryTargeting($inventoryTargeting);
        $targeting->setCustomTargeting($customTargetting);


        // Now setup the line item.
        $lineItem = new LineItem();
        $lineItem->setName($lineitemSubject);
        $lineItem->setOrderId($orderId);
        $lineItem->setTargeting($targeting);
        $lineItem->setLineItemType(LineItemType::PRICE_PRIORITY);
        $lineItem->setAllowOverbook(true);

        // Create the creative placeholder.
        $cp300x250 = new CreativePlaceholder();
        $cp300x250->setSize(new Size(300, 250, false));
        $cp728x90 = new CreativePlaceholder();
        $cp728x90->setSize(new Size(728, 90, false));
        $cp320x50 = new CreativePlaceholder();
        $cp320x50->setSize(new Size(320, 50, false));
        $cp970x90 = new CreativePlaceholder();
        $cp970x90->setSize(new Size(970, 90, false));
        $cp300x600 = new CreativePlaceholder();
        $cp300x600->setSize(new Size(300, 600, false));
        $cp320x100 = new CreativePlaceholder();
        $cp320x100->setSize(new Size(320, 100, false));
        $cp970x250 = new CreativePlaceholder();
        $cp970x250->setSize(new Size(970, 250, false));


        // Set the size of creatives that can be associated with this line item.
        $lineItem->setCreativePlaceholders([$cp300x600,$cp300x250,$cp320x100,$cp320x50,$cp728x90,$cp970x90,$cp970x250]);

        // Set the creative rotation type to even.
        $lineItem->setCreativeRotationType(CreativeRotationType::EVEN);
        $lineItem->setRoadblockingType('ONE_OR_MORE');
        
        $lineItem->setDisableSameAdvertiserCompetitiveExclusion(true);

        // Set the length of the line item to run.
        $lineItem->setStartDateTimeType(StartDateTimeType::IMMEDIATELY);
        $lineItem->setUnlimitedEndDateTime(true);

        // Set the cost per unit to $0.2 -> 200000 microns (0.2 * 1000000)
        $lineItem->setCostType(V202111CostType::CPM);
        $lineItem->setCostPerUnit(new V202111Money('USD', $micronPrice));
      
        // Set the number of units bought to 500,000 so that the budget is
        $goal = new Goal();
        $goal->setUnits(-1);
        $goal->setUnitType(UnitType::IMPRESSIONS);
        $goal->setGoalType(GoalType::NONE);
        $lineItem->setPrimaryGoal($goal);

        $lineItem->SetChildContentEligibility('DISALLOWED');

        try {
            $results = $lineItemService->createLineItems([$lineItem]);
            return $results[0]->getId();
        } catch (\Exception $e) {
            return false;
        }
    }
    protected function lineitemUpdater($orderId, $bidder_code)
    {
        $lineItemService = $this->serviceFactory->createLineItemService($this->session);
		$statementBuilder = new V202111StatementBuilder();
		$statementBuilder->Where('orderId = :orderId AND isArchived != 1');
		$statementBuilder->OrderBy('id ASC');
		$statementBuilder->Limit(351);
		$statementBuilder->WithBindVariableValue('orderId', $orderId);

		$page = $lineItemService->getLineItemsByStatement(
			$statementBuilder->toStatement()
		);
			
		$lineItems = $page->getResults();
			
		$price_rate = 0.20;
		$key = 0;
		foreach ($lineItems as $updatedLineItem) {
			$strPrice_rate = strval($price_rate);
            $dotPos_rate = strpos($strPrice_rate,".");
               
			if($key > 279 ){
				$price_diff = 0.1;
					if(strlen($strPrice_rate) < 4){
						$strPrice_rate .= "";
					}
					if($dotPos_rate == ''){
						$strPrice_rate .= ".0";
					}
				}else{
					$price_diff = 0.01;
					if(strlen($strPrice_rate) < 4 && strlen($strPrice_rate) > 1){
						$strPrice_rate .= "0";
				 	}
					if($dotPos_rate == ''){
						$strPrice_rate .= ".00";
					}
				}
				
                if( $this->proceed ){       
					$this->updateLineItem($lineItemService,$updatedLineItem,$strPrice_rate,$bidder_code);
                } 

                $price_rate += $price_diff; 
				$key++;
		}
    }

    protected function updateLineItem(
        $lineItemService,
        $updatedLineItem,
		$strPrice, 
		$bCode
    ) 
    {
		
		$micronPrice = floatval($strPrice) * 1000000;
        $lineitemSubject = 'KLY Prebid Header Bidding - ' . $bCode . ' - $' . $strPrice;
		$keyId = $this->creative_list[$bCode]["keyId"];

        $valId = $this->getKey($keyId ,$strPrice);
	
        $statementBuilder = new V202111StatementBuilder();
        $statementBuilder->Where('id = :id');
        $statementBuilder->OrderBy('id ASC');
        $statementBuilder->Limit(1);
        $statementBuilder->WithBindVariableValue('id', $updatedLineItem->getId());
        
        // Create a statement to only select a single line item by ID.
        
		$page = $lineItemService->getLineItemsByStatement(
            $statementBuilder->toStatement()
        );

        $lineItem = $page->getResults()[0];
		
		$lineItem->setName($lineitemSubject);
		
		//create custom targetting
        $customCriteriaChild = new V202111CustomCriteria();
        $customCriteriaChild->setKeyId($keyId); // key targetting IDs
        $customCriteriaChild->setValueIds([$valId]); // values targetting IDs
        $customCriteriaChild->setOperator('IS');

        $customTargettingChild = new V202111CustomCriteriaSet();
        $customTargettingChild->setLogicalOperator('AND');
        $customTargettingChild->setChildren([$customCriteriaChild]);

        $customTargetting = new V202111CustomCriteriaSet();
        $customTargetting->setLogicalOperator('OR');
        $customTargetting->setChildren([$customTargettingChild]);
		
		$adunitTargeting = new V202111AdUnitTargeting();
        $adunitTargeting->setAdunitId(35505050);
		
		// Create inventory targeting.
        $inventoryTargeting = new V202111InventoryTargeting();
        $inventoryTargeting->setTargetedAdUnits([$adunitTargeting]);
		
		// Create targeting.
        $targeting = new V202111Targeting();
		$targeting->setInventoryTargeting($inventoryTargeting);
        $targeting->setCustomTargeting($customTargetting);
		
		$lineItem->setTargeting($targeting);
		$lineItem->setCostType(V202111CostType::CPM);
        $lineItem->setCostPerUnit(new V202111Money('USD', $micronPrice));
		
        // Update the line item on the server.
		try {
            $results = $lineItemService->updatelineItems([$lineItem]);
			$statementBuilder->removeLimitAndOffset();
			// Create and perform action.
            $action = new ResumeLineItems();
            $resultResume = $lineItemService->performlineItemAction(
                $action,
                $statementBuilder->toStatement()
            );

            if ($resultResume !== null) {
				 echo $lineitemSubject . " | " . $results[0]->getId() . " Resume !<br/>";
            } else {
                printf("No line items were paused.%s", PHP_EOL);
            }
			
           
        } catch (\Exception $e) {
			echo "ERROR! <br/>" . $e;
            return false;
        }
		 
    }

    public function linteitemGenerator($orderId, $bidder_code)
    {			
            $price_001 = 0.21;
			for($i=0;$i<279;$i++){
			//for($i=194;$i<279;$i++){
                $strPrice_001 = strval($price_001);
                $dotPos_001 = strpos($strPrice_001,".");
                $strlen_001 = strlen($strPrice_001);
                if($dotPos_001 == ''){
                    $strPrice_001 .= ".00";
                }
                if(strlen($strPrice_001) < 4){
                    $strPrice_001 .= "0";
                }
                echo $i . " | " . $strPrice_001 . " => " . $dotPos_001 . " => " . strlen($strPrice_001) ."<br/>";
                
                if($this->proceed ){                    
                    if(($lineitemId = $this->generateLineitem($orderId, $strPrice_001, $bidder_code)) !== FALSE)
                        $this->createLicas($lineitemId);
                }
                
                $price_001 += 0.01;
            }
            
            echo "<br> ================ <br>";
            $price_005 = 3.00;
            for($i=0;$i<60;$i++){
                $strPrice_005 = strval($price_005);
                $dotPos_005 = strpos($strPrice_005,".");
                $strlen_005 = strlen($strPrice_005);

                if($dotPos_005 == ''){
                    $strPrice_005 .= ".00";
                }
                if(strlen($strPrice_005) < 4){
                    $strPrice_005 .= "0";
                }

                echo  $strPrice_005 . " => " . $dotPos_005 . " => " . strlen($strPrice_005) ."<br/>"; 
                if($this->proceed ){   
                    if(($lineitemId = $this->generateLineitem($orderId, $strPrice_005, $bidder_code)) !== FALSE)
                        $this->createLicas($lineitemId);
                }

                $price_005 += 0.05;
            }
			
			
            echo "<br> ================ <br>";
            $price_050 = 6.00;
            for($i=0;$i<29;$i++){
                $strPrice_050 = strval($price_050);
                $dotPos_050 = strpos($strPrice_050,".");
                $strlen_050 = strlen($strPrice_050);
                
                if($dotPos_050 == ''){
                    $strPrice_050 .= ".00";
                }
                
                if($dotPos_050 == 2 && $strlen_050 < 5){
                    $strPrice_050 .= "0";
                }

                if(strlen($strPrice_050) < 4){
                    $strPrice_050 .= "0";
                }

                echo  $strPrice_050 . " => " . $dotPos_050 . " => " . strlen($strPrice_050) . "<br/>"; 
                if($this->proceed ){  
                    if(($lineitemId = $this->generateLineitem($orderId, $strPrice_050, $bidder_code)) !== FALSE)
                        $this->createLicas($lineitemId);
                }
                $price_050 += 0.50;
            }
    }

    protected function createLicas($lineitemId, $creativeList){
        $licaService = $this->serviceFactory->createLineItemCreativeAssociationService($this->session);
        foreach ($creativeList['sizes'] as $sizes => $id) {
            list($width,$height) = explode("x",$sizes);
            echo $width . " | " . $height . "<br/>";
            $size = new Size();
            $size->setWidth($width);
            $size->setHeight($height);
            $size->setIsAspectRatio(false);
            
            $lica = new LineItemCreativeAssociation();
            $lica->setCreativeId($id);
            $lica->setLineItemId($lineitemId);
            $lica->setSizes([$size]);
            $licaService->createLineItemCreativeAssociations([$lica]);
        }
    }

    protected function getKey($keyId,$rateValue)
    {
	
        $customTargetingService = $this->serviceFactory->createCustomTargetingService($this->session);
        $statementBuilder = ( new V202111StatementBuilder() )
        ->where("customTargetingKeyId = {$keyId} AND name = '{$rateValue}' AND matchType = 'PREFIX' AND status = 'ACTIVE'")
        ->orderBy('id ASC')
        ->limit(1);
        $page = $customTargetingService->getCustomTargetingValuesByStatement( $statementBuilder->toStatement());
		
		return  ($page->getResults() !== null) ? $page->getResults()[0]->getId() : '';
    }

}

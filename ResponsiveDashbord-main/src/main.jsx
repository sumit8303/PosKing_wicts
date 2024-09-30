import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './components/Login.jsx'
import Layout from './components/Layout.jsx'
import Products from './pages/Products.jsx'
import Purchases from './pages/Purchases.jsx'
import Home from './pages/Home.jsx'
import AddProducts from './pages/AddProducts.jsx'
import Cpassword from './Profile/Cpassword.jsx'
import Edit from './Profile/Edit.jsx'
import EditProducts from './pages/EditProducts.jsx'
import ViewProducts from './pages/ViewProducts.jsx'
import AddPurchases from './pages/AddPurchases.jsx'
import EditPurchases from './pages/EditPurchases.jsx'
import Damages from './pages/Damages.jsx'
import ViewDamages from './pages/ViewDamages.jsx'
import Stock from './pages/Stock.jsx'
import EditDamages from './pages/EditDamages.jsx'
import ViewPurchases from './pages/ViewPurchases.jsx'
import ProductsVariation from './pages/ProductsVariation.jsx'
import AddVariationProducts from './pages/AddVariationProducts.jsx'
import EditVariationProducts from './pages/EditVariationProducts.jsx'
import OfferAddProducts from './pages/OfferAddProducts.jsx'
import AddDamages from './pages/AddDamages.jsx'
import POS from './pages/POS.jsx'
import POSAddCustomers from './pages/POSAddCustomers.jsx'
import Administrators from './pages/Administrators.jsx'
import ProductsCategory from './pages/ProductsCategory.jsx'
import PurchasesCategory from './pages/PurchasesCategory.jsx'
import AddAdministrators from './pages/AddAdministrators.jsx'
import EditAdministrators from './pages/EditAdministrators.jsx'
import ViewAdministrators from './pages/ViewAdministrators.jsx'
import Address from './pages/Address.jsx'
import AddressCategory from './pages/AddressCategory.jsx'
import EditAddress from './pages/EditAddress.jsx'
import Customers from './pages/Customers.jsx'
import AddCustomers from './pages/AddCustomers.jsx'
import ViewCustomers from './pages/ViewCustomers.jsx'
import CustomersAddress from './pages/CustomersAddress.jsx'
import CustomersCategory from './pages/CustomersCategory.jsx'
import EditCustomers from './pages/EditCustomers.jsx'
import EditCustAddress from './pages/EditCustAddress.jsx'
import Employees from './pages/Employees.jsx'
import AddEmployees from './pages/AddEmployees.jsx'
import ViewEmployees from './pages/ViewEmployees.jsx'
import EmployeesAddress from './pages/EmployeesAddress.jsx'
import EmpAddCategory from './pages/EmpAddCategory.jsx'
import EditEmployees from './pages/EditEmployees.jsx'
import SalesReport from './pages/SalesReport.jsx'
import ProductsReport from './pages/ProductsReport.jsx'
import POSOrders from './pages/POSOrders.jsx'
import Settings from './pages/Settings/Settings.jsx'
import ViewPOSOrders from './pages/ViewPOSOrders.jsx'
import AddCountries from './pages/Settings/Countries/AddCountries.jsx'
import EditCountries from './pages/Settings/Countries/EditCountries.jsx'
import AddStates from './pages/Settings/States/AddStates.jsx'
import EditStates from './pages/Settings/States/EditStates.jsx'
import AddCities from './pages/Settings/Cities/AddCities.jsx'
import EditCities from './pages/Settings/Cities/EditCities.jsx'
import AddCurrencies from './pages/Settings/Currencies/AddCurrencies.jsx'
import EditCurrencies from './pages/Settings/Currencies/EditCurrencies.jsx'
import AddProductCategories from './pages/Settings/ProductCategories/AddProductCategories.jsx'
import EditProductCategories from './pages/Settings/ProductCategories/EditProductCategories.jsx'
import ParentCategory from './pages/Settings/ProductCategories/ParentCategory.jsx'
import AddProductAttributes from './pages/Settings/ProductAttributes/AddProductAttributes.jsx'
import EditProductAttributes from './pages/Settings/ProductAttributes/EditProductAttributes.jsx'
import AddProductBrands from './pages/Settings/ProductBrands/AddProductBrands.jsx'
import EditProductBrands from './pages/Settings/ProductBrands/EditProductBrands.jsx'
import AddSuppliers from './pages/Settings/Suppliers/AddSuppliers.jsx'
import EditSuppliers from './pages/Settings/Suppliers/EditSuppliers.jsx'
import SuppliersCategory from './pages/Settings/Suppliers/SuppliersCategory.jsx'
import AddUnits from './pages/Settings/Units/AddUnits.jsx'
import EditUnits from './pages/Settings/Units/EditUnits.jsx'
import AddTaxes from './pages/Settings/Taxes/AddTaxes.jsx'
import EditTaxes from './pages/Settings/Taxes/EditTaxes.jsx'
import EditRolePermissions from './pages/Settings/RolePermissions/EditRolePermissions.jsx'
import AddRolePermissions from './pages/Settings/RolePermissions/AddRolePermissions.jsx'
import EditPermissions from './pages/Settings/RolePermissions/EditPermissions.jsx'
import ViewSuppliers from './pages/Settings/Suppliers/ViewSuppliers.jsx'
import ViewProductBrands from './pages/Settings/ProductBrands/ViewProductBrands.jsx'
import ViewProductAttributes from './pages/Settings/ProductAttributes/ViewProductAttributes.jsx'
import AddProductAttributeOptions from './pages/Settings/ProductAttributes/AddProductAttributeOptions.jsx'
import EditProductAttributeOptions from './pages/Settings/ProductAttributes/EditProductAttributeOptions.jsx'
import ViewProductCategories from './pages/Settings/ProductCategories/ViewProductCategories.jsx'
import SignUpFrom from './pages/Registraction/SignUpFrom.jsx'
import AdminWicts from './WictsUser/AdminWicts.jsx'
import WictsUser from './WictsUser/WictsUser.jsx'
import AddPayment from './pages/Purchases/AddPayment.jsx'
import PurchasePayments from './components/PurchasesTable/PurchasePayments.jsx'
import EditEmployeesAddress from './pages/EditEmployeesAddress.jsx'
import WictsUserHome from './WictsUser/WictsUserHome.jsx'
import UserTable from './WictsUser/UserTable.jsx'
import ManagerHome from './pages/ManagerPage/ManagerHome.jsx'
import ManagerLayout from './pages/ManagerPage/ManagerLayout.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <> 


    <Route path='' element={<App/>}>   

     <Route path='/' element={<Login/>} />

     <Route path='/signup' element={<SignUpFrom/>} />

    </Route>


    <Route path='' element={<ManagerLayout/>}>   
    <Route index path='/Manager' element={<ManagerHome/>} />
    <Route path='/Manager/pos' element={<POS/>} />
        <Route path='/Manager/pos/addcustomers' element={<POSAddCustomers/>} />
        <Route path='/Manager/posOrders' element={<POSOrders/>} />
        <Route path='/Manager/posOrders/viewposorders' element={<ViewPOSOrders/>} />
        <Route path='/Manager/customers' element={<Customers/>} />
        <Route path='/Manager/customers/addcustomers' element={<AddCustomers/>} />
        <Route path='/Manager/customers/viewcustomers' element={<ViewCustomers/>} />
        <Route path='/Manager/customers/editCustomers' element={<EditCustomers/>} />
        <Route path='/Manager/customers/viewcustomers/customersaddress' element={<CustomersAddress/>} />
        <Route path='/Manager/customers/viewcustomers/editsaddress' element={<EditCustAddress/>} />
        <Route path='/Manager/customers/viewcustomers/addcategory' element={<CustomersCategory/>} />
        <Route path='/Manager/employees' element={<Employees/>} />
        <Route path='/Manager/employees/addemployees' element={<AddEmployees/>} />
        <Route path='/Manager/employees/viewemployees' element={<ViewEmployees/>} />
        <Route path='/Manager/employees/editemployees' element={<EditEmployees/>} />
        <Route path='/Manager/employees/viewemployees/employeesaddress' element={<EmployeesAddress/>} />
        <Route path='/Manager/employees/viewemployees/editemployeesaddress' element={<EditEmployeesAddress/>} />
        <Route path='/Manager/employees/viewemployees/employeesaddress/addresscategory' element={<EmpAddCategory/>} />
        <Route path='/Manager/salesReport' element={<SalesReport/>} />

    </Route>





    <Route path='' element={<AdminWicts/>}>   

     <Route index path='/adminWicts' element={<WictsUserHome/>} />
     <Route path='/admin/userTable' element={<UserTable/>} />
     <Route path='/admin/products' element={<Products/>} />
        <Route path='/admin/products/addproducts' element={<AddProducts/>} />
        <Route path='/admin/products/productsCategory' element={<ProductsCategory/>} />
        <Route path='/admin/products/editproducts/:id' element={<EditProducts/>} />
        <Route path='/admin/products/viewproducts/:id' element={<ViewProducts/>} />
        <Route path='/admin/products/viewproducts/variation' element={<ProductsVariation/>} />
        <Route path='/admin/products/viewproducts/variation/addvariation' element={<AddVariationProducts/>} />
        <Route path='/admin/products/viewproducts/variation/editvariation' element={<EditVariationProducts/>} />
        <Route path='/admin/products/viewproducts/offer' element={<OfferAddProducts/>} />
        <Route path='/admin/purchases' element={<Purchases/>} />
        <Route path='/admin/purchases/addpurchases' element={<AddPurchases/>} />
        <Route path='/admin/purchases/purchasesCategory' element={<PurchasesCategory/>} />
        <Route path='/admin/purchases/viewpurchases' element={<ViewPurchases/>} />
        <Route path='/admin/purchases/addPayment' element={<AddPayment/>} />
        <Route path='/admin/purchases/viewPayment' element={<PurchasePayments/>} />
        <Route path='/admin/purchases/editpurchases' element={<EditPurchases/>} />
        <Route path='/admin/damages' element={<Damages/>} />
        <Route path='/admin/damages/add' element={<AddDamages/>} />
        <Route path='/admin/damages/view' element={<ViewDamages/>} />
        <Route path='/admin/damages/edit' element={<EditDamages/>} />
        <Route path='/admin/stock' element={<Stock/>} />
        <Route path='/admin/pos' element={<POS/>} />
        <Route path='/admin/pos/addcustomers' element={<POSAddCustomers/>} />
        <Route path='/admin/posOrders' element={<POSOrders/>} />
        <Route path='/admin/posOrders/viewposorders' element={<ViewPOSOrders/>} />
        <Route path='/admin/administrators' element={<Administrators/>} />
        <Route path='/admin/administrators/addadministrators' element={<AddAdministrators/>} />
        <Route path='/admin/administrators/editadministrators/:id' element={<EditAdministrators/>} />
        <Route path='/admin/administrators/vi/admin/settings/addProductAttributesewadministrators/:id' element={<ViewAdministrators/>} />
        <Route path='/admin/administrators/viewadministrators/addAddress' element={<Address/>} />
        <Route path='/admin/administrators/viewadministrators/editAddress' element={<EditAddress/>} />
        <Route path='/admin/administrators/viewadministrators/addCategory' element={<AddressCategory/>} />
        <Route path='/admin/customers' element={<Customers/>} />
        <Route path='/admin/customers/addcustomers' element={<AddCustomers/>} />
        <Route path='/admin/customers/viewcustomers' element={<ViewCustomers/>} />
        <Route path='/admin/customers/editCustomers' element={<EditCustomers/>} />
        <Route path='/admin/customers/viewcustomers/customersaddress' element={<CustomersAddress/>} />
        <Route path='/admin/customers/viewcustomers/editsaddress' element={<EditCustAddress/>} />
        <Route path='/admin/customers/viewcustomers/addcategory' element={<CustomersCategory/>} />
        <Route path='/admin/employees' element={<Employees/>} />
        <Route path='/admin/employees/addemployees' element={<AddEmployees/>} />
        <Route path='/admin/employees/viewemployees/:id' element={<ViewEmployees/>} />
        <Route path='/admin/employees/editemployees/:id' element={<EditEmployees/>} />
        <Route path='/admin/employees/viewemployees/employeesaddress' element={<EmployeesAddress/>} />
        <Route path='/admin/employees/viewemployees/editemployeesaddress/:id' element={<EditEmployeesAddress/>} />
        <Route path='/admin/employees/viewemployees/employeesaddress/addresscategory' element={<EmpAddCategory/>} />
        <Route path='/admin/salesReport' element={<SalesReport/>} />
        <Route path='/admin/productsReport' element={<ProductsReport/>} />
        <Route path='/admin/settings' element={<Settings/>} />
        <Route path='/admin/settings/addCountries' element={<AddCountries/>} />
        <Route path='/admin/settings/editCountries' element={<EditCountries/>} />
        <Route path='/admin/settings/addStates' element={<AddStates/>} />
        <Route path='/admin/settings/editStates' element={<EditStates/>} />
        <Route path='/admin/settings/addCities' element={<AddCities/>} />
        <Route path='/admin/settings/editCities' element={<EditCities/>} />
        <Route path='/admin/settings/addCurrencies' element={<AddCurrencies/>} />
        <Route path='/admin/settings/editCurrencies' element={<EditCurrencies/>} />
        <Route path='/admin/settings/addProductCategories' element={<AddProductCategories/>} />
        <Route path='/admin/settings/editProductCategories' element={<EditProductCategories/>} />
        <Route path='/admin/settings/viewProductCategories' element={<ViewProductCategories/>} />
        <Route path='/admin/settings/parentCategory' element={<ParentCategory/>} />
        <Route path='/admin/settings/addProductAttributes' element={<AddProductAttributes/>} />
        <Route path='/admin/settings/viewProductAttributes' element={<ViewProductAttributes/>} />
        <Route path='/admin/settings/editProductAttributes/:id' element={<EditProductAttributes/>} />
        <Route path='/admin/settings/addProductAttributeOptions' element={<AddProductAttributeOptions/>} />
        <Route path='/admin/settings/editProductAttributeOptions/:id' element={<EditProductAttributeOptions/>} />
        <Route path='/admin/settings/addProductBrands' element={<AddProductBrands/>} />
        <Route path='/admin/settings/viewProductBrands' element={<ViewProductBrands/>} />
        <Route path='/admin/settings/editProductBrands' element={<EditProductBrands/>} />
        <Route path='/admin/settings/addSuppliers' element={<AddSuppliers/>} />
        <Route path='/admin/settings/suppliersCategory' element={<SuppliersCategory/>} />
        <Route path='/admin/settings/editSuppliers' element={<EditSuppliers/>} />
        <Route path='/admin/settings/viewSuppliers' element={<ViewSuppliers/>} />
        <Route path='/admin/settings/addUnits' element={<AddUnits/>} />
        <Route path='/admin/settings/editUnits' element={<EditUnits/>} />
        <Route path='/admin/settings/addTaxes' element={<AddTaxes/>} />
        <Route path='/admin/settings/editTaxes' element={<EditTaxes/>} />
        <Route path='/admin/settings/addRolePermissions' element={<AddRolePermissions/>} />
        <Route path='/admin/settings/editRolePermissions' element={<EditRolePermissions/>} />
        
        <Route path='/admin/settings/permissions' element={<EditPermissions/>} />
        <Route path='/admin/profile/edit' element={<Edit/>} />
        <Route path='/admin/profile/changePassword' element={<Cpassword/>} />



    </Route>



      <Route path='/admin' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/admin/products' element={<Products/>} />
        <Route path='/admin/products/addproducts' element={<AddProducts/>} />
        <Route path='/admin/products/productsCategory' element={<ProductsCategory/>} />
        <Route path='/admin/products/editproducts' element={<EditProducts/>} />
        <Route path='/admin/products/viewproducts' element={<ViewProducts/>} />
        <Route path='/admin/products/viewproducts/variation' element={<ProductsVariation/>} />
        <Route path='/admin/products/viewproducts/variation/addvariation' element={<AddVariationProducts/>} />
        <Route path='/admin/products/viewproducts/variation/editvariation' element={<EditVariationProducts/>} />
        <Route path='/admin/products/viewproducts/offer' element={<OfferAddProducts/>} />
        <Route path='/admin/purchases' element={<Purchases/>} />
        <Route path='/admin/purchases/addpurchases' element={<AddPurchases/>} />
        <Route path='/admin/purchases/purchasesCategory' element={<PurchasesCategory/>} />
        <Route path='/admin/purchases/viewpurchases' element={<ViewPurchases/>} />
        <Route path='/admin/purchases/addPayment' element={<AddPayment/>} />
        <Route path='/admin/purchases/viewPayment' element={<PurchasePayments/>} />
        <Route path='/admin/purchases/editpurchases' element={<EditPurchases/>} />
        <Route path='/admin/damages' element={<Damages/>} />
        <Route path='/admin/damages/add' element={<AddDamages/>} />
        <Route path='/admin/damages/view' element={<ViewDamages/>} />
        <Route path='/admin/damages/edit' element={<EditDamages/>} />
        <Route path='/admin/stock' element={<Stock/>} />
        <Route path='/admin/pos' element={<POS/>} />
        <Route path='/admin/pos/addcustomers' element={<POSAddCustomers/>} />
        <Route path='/admin/posOrders' element={<POSOrders/>} />
        <Route path='/admin/posOrders/viewposorders' element={<ViewPOSOrders/>} />
        <Route path='/admin/administrators' element={<Administrators/>} />
        <Route path='/admin/administrators/addadministrators' element={<AddAdministrators/>} />
        <Route path='/admin/administrators/editadministrators' element={<EditAdministrators/>} />
        <Route path='/admin/administrators/viewadministrators/:id' element={<ViewAdministrators/>} />
        <Route path='/admin/administrators/viewadministrators/addAddress' element={<Address/>} />
        <Route path='/admin/administrators/viewadministrators/editAddress/:id' element={<EditAddress/>} />
        <Route path='/admin/administrators/viewadministrators/addCategory' element={<AddressCategory/>} />
        <Route path='/admin/customers' element={<Customers/>} />
        <Route path='/admin/customers/addcustomers' element={<AddCustomers/>} />
        <Route path='/admin/customers/viewcustomers/:id' element={<ViewCustomers/>} />
        <Route path='/admin/customers/editCustomers/:id' element={<EditCustomers/>} />
        <Route path='/admin/customers/viewcustomers/customersaddress' element={<CustomersAddress/>} />
        <Route path='/admin/customers/viewcustomers/editsaddress/:id' element={<EditCustAddress/>} />
        <Route path='/admin/customers/viewcustomers/addcategory' element={<CustomersCategory/>} />
        <Route path='/admin/employees' element={<Employees/>} />
        <Route path='/admin/employees/addemployees' element={<AddEmployees/>} />
        <Route path='/admin/employees/viewemployees' element={<ViewEmployees/>} />
        <Route path='/admin/employees/editemployees' element={<EditEmployees/>} />
        <Route path='/admin/employees/viewemployees/employeesaddress' element={<EmployeesAddress/>} />
        <Route path='/admin/employees/viewemployees/editemployeesaddress' element={<EditEmployeesAddress/>} />
        <Route path='/admin/employees/viewemployees/employeesaddress/addresscategory' element={<EmpAddCategory/>} />
        <Route path='/admin/salesReport' element={<SalesReport/>} />
        <Route path='/admin/productsReport' element={<ProductsReport/>} />
        <Route path='/admin/settings' element={<Settings/>} />
        <Route path='/admin/settings/addCountries' element={<AddCountries/>} />
        <Route path='/admin/settings/editCountries/:id' element={<EditCountries/>} />
        <Route path='/admin/settings/addStates' element={<AddStates/>} />
        <Route path='/admin/settings/editStates/:id' element={<EditStates/>} />
        <Route path='/admin/settings/addCities' element={<AddCities/>} />
        <Route path='/admin/settings/editCities/:id' element={<EditCities/>} />
        <Route path='/admin/settings/addCurrencies' element={<AddCurrencies/>} />
        <Route path='/admin/settings/editCurrencies/:id' element={<EditCurrencies/>} />
        <Route path='/admin/settings/addProductCategories' element={<AddProductCategories/>} />
        <Route path='/admin/settings/editProductCategories/:id' element={<EditProductCategories/>} />
        <Route path='/admin/settings/viewProductCategories/:id' element={<ViewProductCategories/>} />
        <Route path='/admin/settings/parentCategory' element={<ParentCategory/>} />
        <Route path='/admin/settings/addProductAttributes' element={<AddProductAttributes/>} />
        <Route path='/admin/settings/viewProductAttributes' element={<ViewProductAttributes/>} />
        <Route path='/admin/settings/editProductAttributes' element={<EditProductAttributes/>} />
        <Route path='/admin/settings/addProductAttributeOptions' element={<AddProductAttributeOptions/>} />
        <Route path='/admin/settings/editProductAttributeOptions' element={<EditProductAttributeOptions/>} />
        <Route path='/admin/settings/addProductBrands' element={<AddProductBrands/>} />
        <Route path='/admin/settings/viewProductBrands' element={<ViewProductBrands/>} />
        <Route path='/admin/settings/editProductBrands' element={<EditProductBrands/>} />
        <Route path='/admin/settings/addSuppliers' element={<AddSuppliers/>} />
        <Route path='/admin/settings/suppliersCategory' element={<SuppliersCategory/>} />
        <Route path='/admin/settings/editSuppliers' element={<EditSuppliers/>} />
        <Route path='/admin/settings/viewSuppliers' element={<ViewSuppliers/>} />
        <Route path='/admin/settings/addUnits' element={<AddUnits/>} />
        <Route path='/admin/settings/editUnits' element={<EditUnits/>} />
        <Route path='/admin/settings/addTaxes' element={<AddTaxes/>} />
        <Route path='/admin/settings/editTaxes' element={<EditTaxes/>} />
        <Route path='/admin/settings/addRolePermissions' element={<AddRolePermissions/>} />
        <Route path='/admin/settings/editRolePermissions' element={<EditRolePermissions/>} />


        
        <Route path='/admin/settings/permissions' element={<EditPermissions/>} />
        <Route path='/admin/profile/edit' element={<Edit/>} />
        <Route path='/admin/profile/changePassword' element={<Cpassword/>} />

      </Route>


    </>
 )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

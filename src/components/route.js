export default function SetRoute() {
    <BrowserRouter>
        <div>
            <ul className='horizontal-menu'>
                <li><Link to="/">ข้อมูลบัญชี</Link></li>
                <li><Link to="/insert">บันทึกข้อมูล</Link></li>
            </ul>
        </div>
        <Routes>
            {/*page 1*/}
            <Route path='/' element={<ReportComponent />} />
            {/*page 2*/}
            <Route path='/insert' element={<div>
                <FormComponent onAddItem={onAddNewItem} />
                <Transactions items={Items} />
            </div>} />
        </Routes>
    </BrowserRouter>
}
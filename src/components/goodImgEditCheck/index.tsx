import {Col, Row, Image, Descriptions} from 'antd';
import './index.less';
import dayjs from "dayjs";

const {Item} = Descriptions;

function GoodImgEditCheck(props) {
	const {data = {}} = props
	const arr = data?.imgUrlList?.map((item: any) => ({
		src: item
	})) || []
	const imgZ = arr[0]?.src;
	const imgF = arr.slice(1, 4);
	return (
		<Row className={'good-detail'}>
			<Image.PreviewGroup>
				<Col span={10}>
					<Col>
						<Image
							width={200}
							height={200}
							src={imgZ}
						/>
					</Col>
					<Row className={'bus-img'}>
						{imgF.map((item: any, index) => (
							<Col key={index} style={{marginLeft: index === 0 ? 0 : 10}}>
								<Image width={60} height={60} src={item.src}/>
							</Col>
						))}
					</Row>
				</Col>
				<Col span={12} pull={4}>
					<div className={'good-detail-title'}>{data.itemTitle}</div>
					<Descriptions column={2}>
						{data?.itemProperties?.map((item: any, index: any) => {
							if (item.propertyValues && item.propertyName) {
								return (
									<Descriptions.Item key={index} label={item.propertyName}>
										{item.propertyValues}
									</Descriptions.Item>
								)
							}
						})}
					</Descriptions>
					<Descriptions column={1}>
						<Item label={'询价开始时间'}>
							{dayjs(data.askStartTime).format('YYYY-MM-DD HH:mm:ss')}
						</Item>
						<Item label={'询价结束时间'}>
							{dayjs(data.askEndTime).format('YYYY-MM-DD HH:mm:ss')}
						</Item>
						<Item label={'预计采购数量'}>
							{data.number}
						</Item>
					</Descriptions>
				</Col>
			</Image.PreviewGroup>
		</Row>
	);
}

export default GoodImgEditCheck;
